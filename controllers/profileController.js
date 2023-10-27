const communitiesData = require("../data/communities.json");
const listsData = require("../data/lists.json");
const postsData = require("../data/profile.json");

const communities = async (req, res) => {
  res
    .status(200)
    .json({ data: communitiesData, count: communitiesData.length });
};
const lists = async (req, res) => {
  res.status(200).json({ data: listsData, count: listsData.length });
};
const posts = async (req, res) => {
  res
    .status(200)
    .json({ data: postsData.posts, count: postsData.posts.length });
};
const withReplies = async (req, res) => {
  res
    .status(200)
    .json({ data: postsData.posts, count: postsData.posts.length });
};
const likes = async (req, res) => {
  res
    .status(200)
    .json({ data: postsData.likes, count: postsData.likes.length });
};
const media = async (req, res) => {
  const mediaOnlyData = postsData.posts.filter(
    (item) => item.urlToImage && !item.reposted
  );
  res.status(200).json({ data: mediaOnlyData, count: mediaOnlyData.length });
};

module.exports = {
  communities,
  lists,
  posts,
  withReplies,
  likes,
  media,
};
