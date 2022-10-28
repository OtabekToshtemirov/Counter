import React from "react";
import './style.css';
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Lesson1 from "./StateLesson/Lesson1";

function MyApp() {
  return (
    
     <div>
        {/* <Component1 name="Otabek" age="17" />
        <Component2 text="React tutorial" /> */}
        <Lesson1/>
    </div>
    
  );
}

export default MyApp;
