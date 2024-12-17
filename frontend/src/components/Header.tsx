import { NavLink, useLocation } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AppContext } from "../context/app.context";
import { Dropdown } from "antd";
import { logout } from "../apis/auth.api";
import { PATH } from "../constants/path";

const Header = () => {
  const location = useLocation();
  const { isAuthenticated, isAdmin, setIsAuthenticated } =
    useContext(AppContext);

  const menuItems = [
    {
      key: "1",
      label: (
        <NavLink
          className="font-semibold  h-6 flex items-center text-base"
          to="/user-profile"
        >
          <img src="./my_account.png" className="h-6 mr-2" /> My Account
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/"
          className=" mt-5px h-6 flex items-center font-semibold text-base bg-white"
          onClick={() => {
            logout();
            setIsAuthenticated(false);
          }}
        >
          <img src="log_out.png" className="h-6 mr-2" /> Sign Out
        </NavLink>
      ),
    },
  ];

  return (
    <div className="flex flex-row bg-black h-[60px] items-center justify-center px-[10px] py-[10px] bg-opacity-[30%]">
      <div className="w-full mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight md:mx-auto self-start">
          <NavLink to="/">
            <img
              src="./QAirline_Logo_White.png"
              className="self-center w-[200px] h-full"
            />
          </NavLink>
        </span>
        <div className="md:flex hidden justify-center space-x-2 flex-grow">
          <NavLink
            className={
              location.pathname === "/"
                ? "flex items-center text-white px-2 font-semibold border-b-2 border-white-500"
                : "flex items-center text-white px-2 font-semibold border-b-2 border-transparent"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={
              location.pathname === "/search"
                ? "flex items-center text-white px-2 font-semibold border-b-2 border-white-500"
                : "flex items-center text-white px-2 font-semibold border-b-2 border-transparent"
            }
            to="/search"
          >
            Flights
          </NavLink>
          {isAuthenticated && (
            <>
              {!isAdmin ? (
                <NavLink
                  className={
                    location.pathname === PATH.user.mybooking
                      ? "flex items-center text-white px-2 font-semibold border-b-2 border-white-500"
                      : "flex items-center text-white px-2 font-semibold border-b-2 border-transparent"
                  }
                  to={PATH.user.mybooking}
                >
                  My Bookings
                </NavLink>
              ) : null}
              {isAdmin ? (
                <>
                  <NavLink
                    className={
                      location.pathname === PATH.admin.manage
                        ? "flex items-center text-white px-2 font-semibold border-b-2 border-white-500"
                        : "flex items-center text-white px-2 font-semibold border-b-2 border-transparent"
                    }
                    to={PATH.admin.manage}
                  >
                    My Aircrafts
                  </NavLink>
                  <NavLink
                    className={
                      location.pathname === PATH.admin.view_news
                        ? "flex items-center text-white px-2 font-semibold border-b-2 border-white-500"
                        : "flex items-center text-white px-2 font-semibold border-b-2 border-transparent"
                    }
                    to={PATH.admin.view_news}
                  >
                    News
                  </NavLink>
                </>
              ) : null}
            </>
          )}
        </div>
        <div className="flex space-x-4 w-[200px]">
          {isAuthenticated ? (
            <Dropdown menu={{ items: menuItems }}>
              <div className="flex items-center">
                <img
                  src="./image.png"
                  className="w-12 h-8 text-2xl cursor-pointer"
                />
              </div>
            </Dropdown>
          ) : (
            <Fragment>
              <NavLink to="/login" className="flex items-center text-2xl">
                Login
              </NavLink>
              <NavLink to="/register" className="flex items-center text-2xl">
                Register
              </NavLink>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
