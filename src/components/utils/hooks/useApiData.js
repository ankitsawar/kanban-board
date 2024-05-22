import { useEffect, useState } from 'react';

const useApiData = () => {
   const [data, setData] = useState(null);
   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const result = await response.json();
      setData(result);
   }
   return data;
}

export default useApiData;