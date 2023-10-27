import { useGlobalContext } from "../../context";
import { useFetch } from "../useFetch";
import NotificationsContent from "./NotificationsContent";
import Loading from "../Loading";

const AllNotifications = () => {
  const { allNotificationsData, setAllNotificationsData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/notifications",
    allNotificationsData,
    setAllNotificationsData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return <NotificationsContent data={allNotificationsData} />;
};

export default AllNotifications;
