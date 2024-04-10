import { useLocation, Outlet } from "react-router-dom";
import Welcome from "./../../views/Welcome";
import Navigation from "../Navigation";
import Footer from "./../Footer";
import { useContext, useEffect } from "react";
import axiosClient from "../../axios-client";
import { StateContext } from "./../../contexts/ContextProvider";

const DefaultLayout = () => {
  const { setUser } = useContext(StateContext);
  const location = useLocation();

  useEffect(() => {
    axiosClient
      .get("/users/@me")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser]);

  return (
    <div className='default-layout'>
      {
        <>
          <Navigation />
        </>
      }
      {location.pathname === "/" && <Welcome />}
      <Outlet />
      {
        <>
          <Footer />
        </>
      }
    </div>
  );
};

export default DefaultLayout;
