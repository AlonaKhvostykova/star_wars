import {FC, useContext} from 'react'
import { IPageContext, PageContext } from '../../App';


const NavItem: FC<{ title: string }> = ({ title }) => {
  //3.Использование значения, полученного из контекста
  
  // const context = useContext(PageContext);

  const { setPage } = useContext(PageContext) as IPageContext;

  return (
    // < li onClick={() => context?.setPage (title)} className="commonButton" >{title}</ li>
  
    <li onClick={() => setPage(title)} className="commonButton">{title}</li>
  );
}

export default NavItem




// const NavItem: FC<{ title: string; setPage: (newValue: string) => void }> = ({  title,  setPage }) => {
  



 

// const NavItem: FC<items: string[]> = ({ items }) => {
//   return (
//    <>
//       {items.map((item) => (
//         <li key={Math.random()} className="commonButton">
//           {item}
//         </li>
//       ))}
//    </>
//   );
// }
