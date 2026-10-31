// routes/adminRoutes.js
const express = require("express");
const { protect, authorizeRoles } = require("../Middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: `Welcome Admin, ${req.user.firstName}` });
});

module.exports = router;
