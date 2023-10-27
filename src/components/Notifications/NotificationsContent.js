import { HiBell } from "../../Icons";

const NotificationsContent = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="no-notifications">
        <p>No notifications at all</p>
      </div>
    );
  }
  return data.map((item, index) => {
    return (
      <div className="notifications-list" key={index}>
        <div className="notifications-bell-icon">
          <HiBell />
        </div>
        <div className="notifications-list-wrapper">
          <div className="notifications-list-items">
            {item.images.map((image, index) => {
              return (
                <div className="image" key={index}>
                  <img src={image.img} alt={image.alt} />
                </div>
              );
            })}
          </div>
          <div
            className="notification-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></div>
        </div>
      </div>
    );
  });
};

export default NotificationsContent;
