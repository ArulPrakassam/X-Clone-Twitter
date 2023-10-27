const express = require("express");
const router = express.Router();

const {
  whatIsHappening,
  whoToFollow,
} = require("../controllers/latestTrendingController");

router.route("/what-is-happening").get(whatIsHappening);
router.route("/who-to-follow").get(whoToFollow);
module.exports = router;
