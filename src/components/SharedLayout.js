import { Outlet } from "react-router-dom";
import DesktopSidebar from "./Navigation/DesktopSidebar";
import MobileMenu from "./Navigation/MobileMenu";
import MobileSidebar from "./Navigation/MobileSidebar";
import { useGlobalContext } from "../context";
import { useEffect, Suspense } from "react";
import { SectionLoading } from "./Loading";

const SharedLayout = () => {
  const { windowSize, lightMode } = useGlobalContext();
  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  }, [lightMode]);
  return (
    <main>
      {windowSize > 500 ? <DesktopSidebar /> : <MobileSidebar />}
      <Suspense fallback={<SectionLoading />}>
        <Outlet />
      </Suspense>

      {windowSize <= 500 && <MobileMenu />}
    </main>
  );
};

export default SharedLayout;
