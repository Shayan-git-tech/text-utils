import './App.css';
import Header from './Components/Shared/Header.js'
import Footer from './Components/Shared/Footer.js'
import UpperCase from './Components/Home/UpperCase.js'
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('dark');  // Set initial mode as 'light'
 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      setMode('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  return (
    

    <div>
    
       
        <Header mode={mode} toggleMode={toggleMode}/>
        


        <UpperCase heading="Enter the text you want to convert"/>
       
        <Footer name="ShayanKhan."/>
        
        </div>
          
        
        


  );
}

export default App;
