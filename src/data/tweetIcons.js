import {
  BiMessageRounded,
  AiOutlineRetweet,
  AiOutlineHeart,
  FiBarChart2,
  TbShare2,
} from "../Icons";
export const tweetIcons = [
  {
    icon: <BiMessageRounded />,
    hoverColor: "hover-blue",
    title: "Reply",
  },
  {
    icon: <AiOutlineRetweet />,
    hoverColor: "hover-green",
    title: "Repost",
    color: "rgb(0, 186, 124)",
  },
  {
    icon: <AiOutlineHeart />,
    hoverColor: "hover-red",
    title: "Like",
    color: "rgb(199, 2, 2)",
  },
  {
    icon: <FiBarChart2 />,
    hoverColor: "hover-blue",
    title: "View",
  },
  {
    icon: <TbShare2 />,
    hoverColor: "hover-blue",
    title: "Share",
  },
];
