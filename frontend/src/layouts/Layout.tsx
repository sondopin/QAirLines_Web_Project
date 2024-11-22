import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

  const showHero =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div
        className="container mx-auto py-10 flex-1"
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
