const jwt = require("jsonwebtoken");
const User = require("../Models/User");

exports.authenticateToken = async(req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 
  

  if (token == null) {
    // If no token is provided, return a 401 Unauthorized response
    return res.status(401).json({ message: 'Authentication required. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
    console.log(decoded)

    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User not found" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid or expired",  error:error});
  }
};


// Example Express authorization middleware (authorize.js)
exports.authorizeRoles = (allowedRoles) => (req, res, next) => {
  // Assuming user info including 'role' is attached by an earlier authentication middleware
  const userRole = req.user.role; 
  console.log(userRole)
  

  if (allowedRoles.includes(userRole)) {
    next(); // Role is allowed, proceed
  } else {
    res.status(403).json({ error: 'Access denied: insufficient permissions' }); // Forbidden
  }
};

// //Role-based access
// exports.authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Access denied" });
//     }
//     next();
//   };
// };



