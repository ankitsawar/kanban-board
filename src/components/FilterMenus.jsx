import { useContext, useState } from "react";
import StatusContext from "./utils/context/StatusContext";

const FilterMenus = () => {
   const { status, setStatus } = useContext(StatusContext);
   const [grouping, setGrouping] = useState(status.grouping);
   const [ordering, setOrdering] = useState(status.ordering);
   const handleGrouping = (e) => {
      setGrouping(e.target.value);
      setStatus({ ...status, grouping: e.target.value });
      localStorage.setItem("status", JSON.stringify({ ...status, grouping: e.target.value }));
   }

   const handleOrdering = (e) => {
      setOrdering(e.target.value);
      setStatus({ ...status, ordering: e.target.value });
      localStorage.setItem("status", JSON.stringify({ ...status, ordering: e.target.value }));
   }

   return (
      <div className="filter-menu">
         <div className="grouping-menu menu">
            <div className="menu-label">Grouping</div>
            <div>
               <select name="grouping" onChange={handleGrouping} value={grouping}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
               </select>
            </div>
         </div>
         <div className="ordering-menu menu">
            <div className="menu-label">Ordering</div>
            <div>
               <select name="ordering" onChange={handleOrdering} value={ordering}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
               </select>
            </div>
         </div>
      </div>
   )
}

export default FilterMenus; 