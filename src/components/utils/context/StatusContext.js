import { createContext, useState } from "react";

const StatusContext = createContext({
   // grouping: "",
   // ordering: "",
   status: {
      grouping: "",
      ordering: ""
   },
   setGrouping: () => { },
   setOrdering: () => { }
});

export const StatusProvider = ({ children }) => {
   const [status, setStatus] = useState({
      grouping: "status",
      ordering: "priority"
   });

   const setGrouping = (grouping) => {
      setStatus(prevStatus => ({ ...prevStatus, grouping }))
   }
   const setOrdering = (ordering) => {
      setStatus(prevStatus => ({ ...prevStatus, ordering }))
   }
   return <StatusContext.Provider value={{ status, setGrouping, setOrdering }}>
      {children}
   </StatusContext.Provider>
}

export default StatusContext;