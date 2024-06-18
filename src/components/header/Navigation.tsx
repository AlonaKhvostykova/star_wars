import { FC } from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";

const Navigation: FC = () => {
  return (
    <nav>
      <ul>
        {navItems.map((title) => (
          <NavItem key={title} title={title}  />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;




//  return (
//    <nav>
//      <ul>
//        <NavItem items={navItems} />
//      </ul>
//    </nav>
//  )

