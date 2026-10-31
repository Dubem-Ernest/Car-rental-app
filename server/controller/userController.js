const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const authMiddleWare = require ("../middlewares/authMiddleware")
// const admin = require("firebase-admin");

// admin.initializeApp();

//Only admin can access this route
const getAllUsers = (req, res) => {
  res.send("Get all Users");
};


//Only user can access this route
const getOneUser = (req, res) => {
  res.send("Get an existing workout");
};

//Only admin can access this route
const createNewUser =  (req, res) => {
  res.send("Get an existing workout");
};
//Only admin can access this route
const deleteNewUser =  (req, res) => {
  res.send("Get an existing workout");
};

//Only admin can access this route
const updateOneUser = async (req, res) => {
  let user =await User.findById(req.user._id)
  if(user){
     user.name = req.body.name || user.name;  
     user.email = req.body.email || user.email;  
     
     if(req.body.password) req.body.password

     let updatedUser= await user.save()

     res.status(200).json({
      _id:updatedUser._id,
      name:updatedUser.name,
      email:updatedUser.email,
     })

  }else{
    res.status(404)
    throw new Error("User not found")
  }
};

//Only admin can access this route
const deleteOneUser = (req, res) => {
  res.send("Delete an existing workout");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  deleteNewUser
};
