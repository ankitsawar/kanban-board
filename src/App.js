import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import StatusContext, { StatusProvider } from './components/utils/context/StatusContext';
import './index.css';

function App() {

   // const [status, setStatus] = useState({ grouping: "status", ordering: "priority" });
   // useEffect(() => {
   //    if (localStorage.getItem("status"))
   //       setStatus(JSON.parse(localStorage.getItem("status")));
   // }, []);
   return (
      <StatusProvider>
         <Header />
         <Body />
      </StatusProvider>
   );
}

export default App;
