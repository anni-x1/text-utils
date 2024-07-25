import './App.css';
import Navbar from './Components/Navbar.js';
import Textb from './Components/Textb.js';
import './Components/Custom.css';
import { useState } from 'react';
// import Car
function App() {
  const [mode, setMode] = useState('light');
  const toggle = () => {
     if(mode==='light'){
      setMode('dark');
     }
     else{
      setMode('light');
     }
  }
  return (
    <div className={`${mode}-blue-body`}>
      <Navbar title={"TEXT-UTILS"} mod={mode} Toggle={toggle}/>
      <Textb mod={mode}/>
    </div>
  );
}

export default App;
