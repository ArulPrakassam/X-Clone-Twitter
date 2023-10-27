import { lazy } from "react";
const Home = lazy(() => import("../Pages/Home"));
const Explore = lazy(() => import("../Pages/Explore"));
const ForYou = lazy(() => import("./Explore/ForYou"));
const Trending = lazy(() => import("./Explore/Trending"));
const News = lazy(() => import("./Explore/News"));
const Sports = lazy(() => import("./Explore/Sports"));
const Entertainment = lazy(() => import("./Explore/Entertainment"));
const Notifications = lazy(() => import("../Pages/Notifications"));
const AllNotifications = lazy(() => import("./Notifications/AllNotifications"));
const VerifiedNotifications = lazy(() =>
  import("./Notifications/VerifiedNotifications")
);
const MentionNotifications = lazy(() =>
  import("./Notifications/MentionNotifications")
);
const Messages = lazy(() => import("../Pages/Messages"));
const Bookmarks = lazy(() => import("../Pages/Bookmarks"));
const Profile = lazy(() => import("../Pages/Profile"));
const Posts = lazy(() => import("./Profile/Posts"));
const Media = lazy(() => import("./Profile/Media"));
const Replies = lazy(() => import("./Profile/Replies"));
const Likes = lazy(() => import("./Profile/Likes"));
const Lists = lazy(() => import("../Pages/Lists"));
const Communities = lazy(() => import("../Pages/Communities"));
const ErrorPage = lazy(() => import("../Pages/404"));
const ComposeTweetModal = lazy(() =>
  import("../components/Messages/FloatingMessageSection")
);
export {
  Home,
  Explore,
  ForYou,
  Trending,
  News,
  Sports,
  Entertainment,
  Notifications,
  AllNotifications,
  VerifiedNotifications,
  MentionNotifications,
  Messages,
  Bookmarks,
  Profile,
  Posts,
  Media,
  Replies,
  Likes,
  Lists,
  Communities,
  ErrorPage,
  ComposeTweetModal,
};
