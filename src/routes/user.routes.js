const express = require("express");
const {
  registerUser,
  loginUser,
  getUserData,
  getRefreshToken,
  searchCars
} = require("../controllers/authcontroller");
const router = express.Router();

router.post("/signin", loginUser);
router.post("/register", registerUser);
router.get("/user/:id", getUserData);
router.post("/refresh-token", getRefreshToken);
router.get("/search", searchCars);

module.exports = router;
