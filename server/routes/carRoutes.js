const express = require("express");
const router = express.Router();
const carController = require("../controller/carController")
const {authenticateToken,
  authorizeRoles,} = require("../middlewares/authMiddleware")
const uploads = require("../middlewares/multerConfig")



router.get("/",carController.getAllCars);

// router.post("/:carId",auth.authenticateToken,auth.authorizeRoles(["Admin","User"]),carController.createCar)

router.get("/:id",carController.getOneCar)
// router.patch("/:carId", (req, res) => {
//   res.send("Update an car");
// });  ,authenticateToken,authorizeRoles(["Admin","User"])

router.delete("/:carId", (req, res) => {
  res.send("Delete an existing car");
});

module.exports = router;
