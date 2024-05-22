import { useEffect, useRef, useState } from "react";
import { ReactComponent as Display } from "../assets/Display.svg";
import { ReactComponent as DownArrow } from "../assets/down.svg";
import FilterMenus from "./FilterMenus";

const Header = () => {
   const [showMenu, setShowMenu] = useState(false);
   const dropdownRef = useRef(null);

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
         setShowMenu(false);
   };

   return (
      <header className="header ">
         <div className="filter-dropdown" ref={dropdownRef}>
            <button className="filter-dropdown-btn" onClick={() => setShowMenu(!showMenu)}>
               <Display />
               <span>&nbsp;&nbsp;Display&nbsp;&nbsp;</span>
               <DownArrow />
            </button>
            {showMenu && <FilterMenus />}
         </div>
      </header>
   )
}

export default Header;