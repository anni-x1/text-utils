import 'bootstrap';
import Navbar from './Components/Navbar.jsx';
import { Textb } from './Components/Textb.jsx';
import About from './Components/About.jsx';
import './Components/Custom.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <div className={`${mode}-blue-body`}>
      <Router>
        <Navbar title={"TEXT-UTILS"} mod={mode} Toggle={toggle} />
        <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Textb mod={mode} toggle={toggle}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;