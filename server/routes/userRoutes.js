const express = require("express");
const userController = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/getAllUsers",userController.getAllUsers);

router.get("/getUser:userId",userController.getOneUser);

router.post("/createUser", userController.createNewUser);

router.patch("/updateUser:userId",userController.updateOneUser);

router.delete("/:userId",userController.deleteOneUser);


module.exports = router;
