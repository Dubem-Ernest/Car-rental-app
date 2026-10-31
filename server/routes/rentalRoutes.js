const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all rentals");
});

router.get("/:rentalId", (req, res) => {
  res.send("Get an existing workout");
});

router.post("/", (req, res) => {
  res.send("Create a new user");
});

// router.patch("/:workoutId", (req, res) => {
//   res.send("Update an existing workout");
// });

router.delete("/:rentalId", (req, res) => {
  res.send("Delete an existing workout");
});

module.exports = router;
