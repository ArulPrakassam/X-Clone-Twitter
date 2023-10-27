import { HeaderText } from "../Chunks/Chunks";
import { RiFileList2Line, AiOutlinePlus } from "../../Icons";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import { useFetch } from "../useFetch";

const ListsContent = () => {
  const { listsData, setListsData, formatToUnits } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/profile/lists",
    listsData,
    setListsData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return (
    <>
      <div className="pinned-lists">
        <HeaderText text="Pinned Lists" />
        <div className="pinned-lists-items">
          <p>
            Nothing to see here yet - pin your favorite Lists to access theme
            quickly
          </p>
        </div>
      </div>

      <div className="discover-new-lists">
        <HeaderText text="Discover new Lists" />
        <div className="discover-new-lists-items">
          {listsData.map((item, index) => {
            const { name, members, followers, profile } = item;
            return (
              <div className="list-single-item" key={index}>
                {/* list details */}
                <div className="list-details">
                  <div
                    className="list-img"
                    style={{ backgroundColor: profile ? `${profile}` : "" }}
                  >
                    <RiFileList2Line />
                  </div>

                  <div className="list-details-content">
                    <div className="list-title">
                      <h2>{name}</h2>
                      <span> . </span>
                      <p className="members-count">
                        {formatToUnits(members)} members
                      </p>
                    </div>
                    <div className="list-followers">
                      <p>{formatToUnits(followers)} followers</p>
                    </div>
                  </div>
                </div>
                {/* add list icon */}
                <div className="add-list-icon">
                  <button className="add-list-btn">
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="lists-show-more">
            <p>Show more</p>
          </div>
        </div>
      </div>

      <div className="your-lists">
        <HeaderText text="Your Lists" />
        <div className="your-lists-items">
          <p>
            You haven't created or followed any Lists. When you do, they'll show
            up here
          </p>
        </div>
      </div>
    </>
  );
};
export default ListsContent;
