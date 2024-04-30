import { useEffect, useState } from "react";
import { fetchDataSimulator } from "./api";

const Cat = () => {
  const [catMsg, setCatMessage] = useState("");

  // Example of side effect and cleaning it after component unmount
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataSimulator();
      setCatMessage(result);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
      console.log("I`m crazy and i will break your code");
    }, []);

  // DON'T YOU DARE DO THAT! 
  // Causes an infinite rerender, because of changing the state, which its depends on inside useEffect

    // useEffect(() => {
    //   setCatMessage("hello");
    //   console.log('oh sh*t, infinite loop')
    // }, [catMsg]);

  return <p>{catMsg}</p>;
};

export default Cat;
