const forYouData = require("../data/forYou.json");
const trendingData = require("../data/trending.json");
const sportsData = require("../data/sports.json");
const newsData = require("../data/news.json");
const entertainmentData = require("../data/entertainment.json");

const forYou = async (req, res) => {
  res.status(200).json({ data: forYouData, count: forYouData.length });
};
const trending = async (req, res) => {
  res.status(200).json({ data: trendingData, count: trendingData.length });
};

const sports = async (req, res) => {
  res.status(200).json({ data: sportsData, count: sportsData.length });
};

const news = async (req, res) => {
  res.status(200).json({ data: newsData, count: newsData.length });
};

const entertainment = async (req, res) => {
  res
    .status(200)
    .json({ data: entertainmentData, count: entertainmentData.length });
};

module.exports = { forYou, trending, sports, news, entertainment };
