import './App.css';
import Navbar from "./Practice Components/2.) Props Learning/Navbar";
import Alerts from './Practice Components/3.) Hooks/Alerts';
import Textform from "./Practice Components/3.) Hooks/Textform";
import React, { useState } from 'react';
// import Mode from "./Practice Components/3.) Hooks/Mode";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  
  const showAlert =(message, type) => {
    setalert({
       msg: message,
       type: type
  })
  setTimeout(() => {
    setalert(null)
  }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#173d71';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "Success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#173d71';
      showAlert("Light Mode has been Enabled", "Success")
    }
  }




  return (
    <>
       { <Navbar  title = "REACT WEB" mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>   /*user defined components */}
       <Alerts alert ={alert}/>
       <div className='Container'>
       <Textform Heading = "Write the Text to do the Following Tasks" toggleMode={toggleMode} showAlert={showAlert}/>
       </div>
  
       {/* <Mode/> */}
  </>
  );
}

export default App;
