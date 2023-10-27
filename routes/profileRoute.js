const express = require("express");
const router = express.Router();

const {
  communities,
  lists,
  posts,
  withReplies,
  likes,
  media,
} = require("../controllers/profileController");

router.route("/communities").get(communities);
router.route("/lists").get(lists);
router.route("/posts").get(posts);
router.route("/with-replies").get(withReplies);
router.route("/likes").get(likes);
router.route("/media").get(media);

module.exports = router;
