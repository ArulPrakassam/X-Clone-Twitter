const whatIsHappeningData = require("../data/whatIsHappening.json");
const { randomUsers } = require("../controllers/homeController");

const whatIsHappening = async (req, res) => {
  res
    .status(200)
    .json({ data: whatIsHappeningData, count: whatIsHappeningData.length });
};

const whoToFollow = async (req, res) => {
  const users = await randomUsers(3);
  const whotToFollowData = users.map((item) => {
    const { name, picture } = item;
    return {
      name,
      picture,
    };
  });
  res
    .status(200)
    .json({ data: whotToFollowData, count: whotToFollowData.count });
};

module.exports = { whatIsHappening, whoToFollow };
