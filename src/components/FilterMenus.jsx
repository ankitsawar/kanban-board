import { useContext, useState } from "react";
import StatusContext from "./utils/context/StatusContext";

const FilterMenus = () => {
   const { status, setGrouping, setOrdering } = useContext(StatusContext);
   const handleGrouping = (e) => setGrouping(e.target.value);

   const handleOrdering = (e) => setOrdering(e.target.value);

   return (
      <div className="filter-menu">
         <div className="grouping-menu menu">
            <div className="menu-label">Grouping</div>
            <div>
               <select name="grouping" onChange={handleGrouping}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
               </select>
            </div>
         </div>
         <div className="ordering-menu menu">
            <div className="menu-label">Ordering</div>
            <div>
               <select name="ordering" onChange={handleOrdering} >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
               </select>
            </div>
         </div>
      </div>
   )
}

export default FilterMenus; 