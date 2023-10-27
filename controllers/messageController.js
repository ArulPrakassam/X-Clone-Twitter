const { randomUsers } = require("../controllers/homeController");

const messages = async (req, res) => {
  const users = await randomUsers(2);
  const totalMessages = users
    .map((item) => {
      const { name, picture } = item;
      //generating random date
      const time = new Date(
        Date.now() - Math.floor(Math.random() * Math.pow(10, 10))
      ).toLocaleDateString("ir-IR", {
        day: "numeric",
        year: "numeric",
        month: "short",
      });

      return {
        name,
        picture,
        time,
        message: "Hi, How are you?",
      };
    })
    .sort((i, j) => {
      i.time < j.time ? 1 : i.time > j.time ? -1 : 0;
    });

  res.status(200).json({ data: totalMessages, count: totalMessages.length });
};
module.exports = { messages };
