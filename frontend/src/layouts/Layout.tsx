import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

  const showHero =
    location.pathname !== "/login" && location.pathname !== "/register";
  const showSearchBar =
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/add-aircraft" &&
    location.pathname !== "/my-aircrafts" &&
    location.pathname !== "/user-profile" &&
    !location.pathname.startsWith("/edit-aircraft");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto mt-[-140px] w-5/6">
        {showSearchBar && <SearchBar />}
      </div>
      <div
        className={`container mx-auto py-10 flex-1 ${
          showSearchBar ? "" : "mt-[50px]"
        }`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
