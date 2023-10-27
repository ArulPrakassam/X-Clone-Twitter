const fetchData = async (category) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}`,
      {
        headers: {
          Authorization: process.env.API_KEY,
        },
      }
    );
    const data = await response.json();

    const results = data.articles;
    if (results.length > 0) {
      const items = results.filter(
        (singleArticle) =>
          singleArticle.description &&
          singleArticle.urlToImage &&
          singleArticle.title &&
          singleArticle.publishedAt
      );
      const users = await randomUsers(items.length);
      if (users) {
        const newsItems = items.map((item, index) => {
          const { description, urlToImage, title, publishedAt } = item;

          const time = new Date(publishedAt).toLocaleDateString("ir-IR", {
            day: "numeric",
            year: "numeric",
            month: "short",
          });
          return {
            description,
            urlToImage,
            title,
            time,
            ...users[index],
          };
        });
        return newsItems;
      }
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

const randomUsers = async (length) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?nat=us&inc=name,picture&results=${length}`
    );
    const data = await response.json();
    const results = data.results;

    if (results.length > 0) {
      const count = (val) => Math.ceil(Math.random() * val);
      const items = results.map((item) => {
        return {
          name: `${item.name.first} ${item.name.last}`,
          picture: item.picture.large,
          engage: {
            Repost: count(10),
            Like: count(10),
            View: count(100),
            Reply: count(2),
          },
        };
      });
      return items;
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

const home = async (req, res) => {
  const { feed } = req.query;
  let data;
  if (feed === "for-you") {
    data = await fetchData("technology");
  } else {
    data = await fetchData("entertainment");
  }

  if (data) {
    return res.status(200).json({ data, count: data.length });
  }
  res.status(200).json({ message: "Please Try again later..." });
};

module.exports = { home, randomUsers };
