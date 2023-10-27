import { HeaderText } from "../Chunks/Chunks";
import { useFetch } from "../useFetch";
import { BiDotsHorizontalRounded } from "../../Icons";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";

const CommunitiesContent = () => {
  const { formatToUnits, discoverCommunities, setDiscoverCommunities } =
    useGlobalContext();

  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/profile/communities",
    discoverCommunities,
    setDiscoverCommunities
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return (
    <>
      <div className="discover-new-communities">
        <div className="discover-new-communities-heading">
          <HeaderText text="Discover new Communities" />
          <span>
            <BiDotsHorizontalRounded />
          </span>
        </div>

        <div className="discover-new-lists-items">
          {discoverCommunities.map((item, index) => {
            const { name, members, profile } = item;
            return (
              <div className="list-single-item" key={index}>
                <div className="list-details">
                  <div className="discover-community-img">
                    <img src={profile} alt={name} />
                  </div>
                  <div className="list-details-content">
                    <div className="list-title">
                      <h2>{name}</h2>
                    </div>
                    <p className="members-count">
                      {formatToUnits(members)} members
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="lists-show-more">
            <p>Show more</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunitiesContent;
