import Welcome from "../../views/Welcome";
import { useLocation, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const location = useLocation();

  return (
    <div className="default-layout">
      {/* Your dashboard layout elements here (header, sidebar, etc.) */}
      {location.pathname === "/" && <Welcome />}
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
