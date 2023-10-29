const { randomUsers } = require("../controllers/homeController");

const createNotifications = async (count) => {
  const users = await randomUsers(count);
  if (users) {
    let text;
    const images = users.map((item) => {
      const { name, picture } = item;
      text = name;
      return {
        img: picture,
        alt: name,
      };
    });
    const notifications = [
      {
        text: `New post notifications for <b>${text}</b> and 3 others`,
        images,
      },
    ];

    return notifications;
  }
  return;
};

const allNotifications = async (req, res) => {
  const notifications = await createNotifications(4);
  if (notifications) {
    return res.status(200).json({
      data: notifications,
      count: notifications.length,
    });
  }
  res.status(404).json({ message: "Please Try again later..." });
};

const verifiedNotifications = async (req, res) => {
  const notifications = await createNotifications(6);
  if (notifications) {
    return res.status(200).json({
      data: notifications,
      count: notifications.length,
    });
  }
  res.status(404).json({ message: "Please Try again later..." });
};

const mentionNotifications = async (req, res) => {
  res.status(200).json({
    data: [],
    count: 0,
  });
};

module.exports = {
  allNotifications,
  mentionNotifications,
  verifiedNotifications,
};
