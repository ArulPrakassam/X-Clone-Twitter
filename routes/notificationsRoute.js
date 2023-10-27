const express = require("express");
const router = express.Router();

const {
  allNotifications,
  mentionNotifications,
  verifiedNotifications,
} = require("../controllers/notificationsController");

router.route("/").get(allNotifications);
router.route("/mentions").get(mentionNotifications);
router.route("/verified").get(verifiedNotifications);

module.exports = router;
