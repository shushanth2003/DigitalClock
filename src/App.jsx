import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [currentdate,setCurrentdate]=useState(new Date())
  useEffect(()=>{
    const timer=setInterval(()=>{
      setCurrentdate(new Date());
    },1000);
    return ()=>clearInterval(timer);
  },[]);
  const formathour=(hour)=>{
    return hour === 0? 12 : hour>12?hour-12:hour;
  };
  const formattimeleadingzero = (num)=>{
    return num<10?`0${num}` :num;
  }; 
  const formatDate = (date) => {
    const options = { weekday: "long" , year:"numeric",month:"long",day:"numeric"};
    return date.toLocaleDateString(undefined, options);
  };
  
  return (
    <>  
    <div className="maincontainer">
      <h1>Digital Clock</h1>
      <div className="date"><h1>{formattimeleadingzero(formathour(currentdate.getHours()))}:{formattimeleadingzero(currentdate.getMinutes())}:{formattimeleadingzero(currentdate.getSeconds())} {currentdate.getHours()>=12?"PM":"AM"}</h1></div>
      <div className="dateend"><p>{formatDate(currentdate)}</p></div>
    </div>
    </>
  )
}

export default App
