const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');


router.post('/signup', auth.signUp);
router.post('/login', auth.login);


//Validate token
// router.get("/validate", protect, (req, res) => {
//     res.json({ valid: true, user: req.user });
//   });


module.exports = router;