const express = require("express");
const router = express.Router();

const {
  forYou,
  trending,
  sports,
  news,
  entertainment,
} = require("../controllers/exploreController");

router.route("/for-you").get(forYou);
router.route("/trending").get(trending);
router.route("/sports").get(sports);
router.route("/news").get(news);
router.route("/entertainment").get(entertainment);

module.exports = router;
