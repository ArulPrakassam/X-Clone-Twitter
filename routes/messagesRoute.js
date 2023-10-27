const express = require("express");
const router = express.Router();

const { messages } = require("../controllers/messageController");

router.route("/").get(messages);

module.exports = router;
