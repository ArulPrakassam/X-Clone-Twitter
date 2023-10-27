const whatIsHappeningData = require("../data/whatIsHappening.json");
const { randomUsers } = require("../controllers/homeController");

const whatIsHappening = async (req, res) => {
  res
    .status(200)
    .json({ data: whatIsHappeningData, count: whatIsHappeningData.length });
};

const whoToFollow = async (req, res) => {
  const users = await randomUsers(3);
  if (users) {
    const whotToFollowData = users.map((item) => {
      const { name, picture } = item;
      return {
        name,
        picture,
      };
    });
    return res
      .status(200)
      .json({ data: whotToFollowData, count: whotToFollowData.count });
  }
  res.status(200).json({ message: "Please Try again later..." });
};

module.exports = { whatIsHappening, whoToFollow };
