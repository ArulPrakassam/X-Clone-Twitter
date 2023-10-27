import NotificationsContent from "./NotificationsContent";
import Loading from "../Loading";
import { useFetch } from "../useFetch";
import { useGlobalContext } from "../../context";

const VerifiedNotifications = () => {
  const { verifiedNotificationsData, setVerifiedNotificationsData } =
    useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/notifications/verified",
    verifiedNotificationsData,
    setVerifiedNotificationsData
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return <NotificationsContent data={verifiedNotificationsData} />;
};

export default VerifiedNotifications;
