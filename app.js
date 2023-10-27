require("dotenv").config();

//security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

const homeRouter = require("./routes/homeRoute");
const exploreRouter = require("./routes/exploreRoute");
const LatestTrendingRouter = require("./routes/latestTrendingRoute");
const profileRouter = require("./routes/profileRoute");
const notificationsRouter = require("./routes/notificationsRoute");
const messagesRouter = require("./routes/messagesRoute");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(xss());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>X clone</h1>");
});

//routes
app.use("/api/v1/home", homeRouter);
app.use("/api/v1/explore", exploreRouter);
app.use("/api/v1/latest-trending", LatestTrendingRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/notifications", notificationsRouter);
app.use("/api/v1/messages", messagesRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
