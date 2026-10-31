const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateAccessToken = require("../utils/generateToken");

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    // Check if email already exists
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email already exists" });

    // Check if phone already exists
    if (await User.findOne({ phoneNumber }))
      return res.status(400).json({ message: "Phone number already exists" });

    // Hash password for MongoDB storage
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in MongoDB
    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    }); 

    await newUser.save();

    res
      .status(201)
      .json({ message: `${email} registered successfully`, success: true });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password!" });

    // Generate JWT
    const userToken = generateAccessToken(user);
   

    res.status(200).json({userToken,user:{
      id:user._id,
      email:user.email,
      profilePics:user.profilePic || null,
      role:user.role
    } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", err });
  }
};



// exports.refreshToken = async (req, res) => {
//   const token = req.cookies.refreshToken

//   if(!token){
//     return res.status(401).json({message:"No refresh token provided"})
//   }

//   try {
    
//   } catch (error) {
    
//   }

// }
