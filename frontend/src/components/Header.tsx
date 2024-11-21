import { NavLink, useLocation } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AppContext } from "../context/app.context";
import { Dropdown } from "antd";
import { logout } from "../apis/auth.api";

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
    <div className="bg-white py-6">
      <div className="max-w-[1232px] mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight md:mx-auto">
          <NavLink to="/">
            <img
              src="./QAirline_Logo.png"
              className="self-center aspect-[3.03] w-[111px] h-[36px]"
            />
          </NavLink>
        </span>
        <div className="md:flex hidden justify-center space-x-2 flex-grow">
          <NavLink
            className={
              location.pathname === "/"
                ? "flex items-center text-black px-2 font-semibold border-b-2 border-blue-500"
                : "flex items-center text-black px-2 font-semibold border-b-2 border-transparent"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={
              location.pathname === "/search"
                ? "flex items-center text-black px-2 font-semibold border-b-2 border-blue-500"
                : "flex items-center text-black px-2 font-semibold border-b-2 border-transparent"
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
                    location.pathname === "/my-bookings"
                      ? "flex items-center text-black px-2 font-semibold border-b-2 border-blue-500"
                      : "flex items-center text-black px-2 font-semibold border-b-2 border-transparent"
                  }
                  to="/my-bookings"
                >
                  My Bookings
                </NavLink>
              ) : null}
              {isAdmin ? (
                <NavLink
                  className={
                    location.pathname === "/my-aircrafts"
                      ? "flex items-center text-black px-2 font-semibold border-b-2 border-orange-500"
                      : "flex items-center text-black px-2 font-semibold border-b-2 border-transparent"
                  }
                  to="/my-aircrafts"
                >
                  My Aircrafts
                </NavLink>
              ) : null}
            </>
          )}
        </div>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <Dropdown menu={{ items: menuItems }}>
              <div className="flex items-center">
                <img
                  src="./account.png"
                  className="w-8 h-8 text-2xl cursor-pointer"
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
