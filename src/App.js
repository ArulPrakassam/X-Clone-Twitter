import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { Suspense } from "react";
import SharedLayout from "./components/SharedLayout";
import Loading from "./components/Loading";
import ComposeTweetModal from "./components/Tweets/ComposeTweetModal";
import {
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
  Lists,
  Communities,
  Media,
  Likes,
  Posts,
  Replies,
  ErrorPage,
} from "./components/LazyComponents";

const App = () => {
  const location = useLocation();

  //it has the location object of our previous page
  const history = location?.state;

  return (
    <>
      <Routes location={history || location}>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route index element={<Navigate to="/home" />} />
          <Route path="/explore" element={<Explore />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <ForYou />
                </Suspense>
              }
            />
            <Route
              path="/explore/tabs/for-you"
              element={
                <Suspense fallback={<Loading />}>
                  <ForYou />
                </Suspense>
              }
            />
            <Route
              path="/explore/tabs/trending"
              element={
                <Suspense fallback={<Loading />}>
                  <Trending />
                </Suspense>
              }
            />
            <Route
              path="/explore/tabs/news"
              element={
                <Suspense fallback={<Loading />}>
                  <News />
                </Suspense>
              }
            />
            <Route
              path="/explore/tabs/sports"
              element={
                <Suspense fallback={<Loading />}>
                  <Sports />
                </Suspense>
              }
            />
            <Route
              path="/explore/tabs/entertainment"
              element={
                <Suspense fallback={<Loading />}>
                  <Entertainment />
                </Suspense>
              }
            />
          </Route>
          <Route path="/notifications" element={<Notifications />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <AllNotifications />
                </Suspense>
              }
            />
            <Route
              path="/notifications/verified"
              element={
                <Suspense fallback={<Loading />}>
                  <VerifiedNotifications />
                </Suspense>
              }
            />
            <Route
              path="/notifications/mentions"
              element={
                <Suspense fallback={<Loading />}>
                  <MentionNotifications />
                </Suspense>
              }
            />
          </Route>
          <Route path="/messages" element={<Messages />} />
          <Route path="/i/bookmarks" element={<Bookmarks />} />
          <Route path="/ArulPrakassam" element={<Outlet />}>
            <Route path="" element={<Profile />}>
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <Posts />
                  </Suspense>
                }
              />
              <Route
                path="/ArulPrakassam/with_replies"
                element={
                  <Suspense fallback={<Loading />}>
                    <Replies />
                  </Suspense>
                }
              />
              <Route
                path="/ArulPrakassam/media"
                element={
                  <Suspense fallback={<Loading />}>
                    <Media />
                  </Suspense>
                }
              />
              <Route
                path="/ArulPrakassam/likes"
                element={
                  <Suspense fallback={<Loading />}>
                    <Likes />
                  </Suspense>
                }
              />
            </Route>

            <Route path="/ArulPrakassam/lists" element={<Lists />} />
            <Route
              path="/ArulPrakassam/communities"
              element={<Communities />}
            />
          </Route>
          <Route path="/compose-tweet" element={<ComposeTweetModal />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {history && (
        <Routes>
          <Route path="/compose-tweet" element={<ComposeTweetModal />} />
        </Routes>
      )}
    </>
  );
};
export default App;
