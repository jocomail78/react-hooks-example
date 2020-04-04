import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  /*
  useEffect(() => {
    //it will run only after the content was rendered. And the content will be re-rendered
    //after the setTime will set another value to the time variable.

    //Cleanup function has to be returned, since every time this component gets unmounted, 
    //it will call the cleanup function. And if there are some stuff which wasn't cleaned properly,
    //that can cause weird issues later on. 

    //For example: if it's an ajax request, the return () function should/could cancel the request
    //Or any kind of cleanup process, which is necessary if component will be unmounted/destoyed.

    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer); 
  }); //If there's no dependency added, it will run every time something changes, 
      //since it will think it's depending on everything
  */

  //These two versions are interchangeable

  /*
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  */

  //But be aware, this won't work
  /*
  useEffect(() => {
    const timer = setInterval(setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  */

  //Proper way would be adding the dependencies to the useEffect() function

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time, setTime]);

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
