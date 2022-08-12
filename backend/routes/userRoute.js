const router = require("express").Router();

const {
  Usersignup,
  Usersignin,
  logoutUser,
  getoneUser,
  getallUser,
} = require("../controllers/userController");

router.post("/signup", Usersignup);
router.post("/signin", Usersignin);

router.get("/logout", logoutUser);
router.get("/getone", getoneUser);
router.get("/getall", getallUser);

module.exports = router;
