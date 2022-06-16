
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

import { ThemeContext } from './Context/ThemeContext';
import { useContext } from 'react';



function App() {
  const{isLight}=useContext(ThemeContext)
  return (
    <div className={isLight?"light":"dark"}>
     
      <Navbar/>
      <Body/>
     
    </div>
  );
}

export default App;
