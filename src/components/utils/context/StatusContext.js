import { createContext } from "react";

const StatusContext = createContext({
   grouping: "",
   ordering: ""
});

export default StatusContext;