import { FC, useContext } from "react";
import { IPageContext, PageContext } from "../../App";
import { navItems } from "../../utils/constants";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import StarWars from "../pages/StarWars";
import Contact from "../pages/Contact";

const Main: FC = () => {
  const { page } = useContext(PageContext) as IPageContext;

  switch (page) {
    case navItems[0]:
      return <Home />;
    case navItems[1]:
      return <AboutMe />;
    case navItems[2]:
      return <StarWars />;
    case navItems[3]:
      return <Contact />;

    default:
      break;
  }
};

export default Main;
