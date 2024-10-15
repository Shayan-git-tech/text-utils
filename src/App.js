import './App.css';
import Header from './Components/Shared/Header.js'
import Footer from './Components/Shared/Footer.js'
import UpperCase from './Components/Home/UpperCase.js'
import React, {useState, useEffect} from 'react';
import Alert from './Components/Home/Alert.js';

function App() {
  const [mode, setMode] = useState('dark');  // Set initial mode as 'light'
  const [alert, setAlert] = useState(null);

const showAlert = (message) => {
  setAlert(message);
  setTimeout(() => setAlert(false), 1500);
}

  useEffect(() => {
    // On initial render, apply the dark mode styles
    document.body.classList.add('dark');
  }, []);
  

   const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      showAlert("Dark Mode Enabled")
    } else {
      setMode('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      showAlert("Light Mode Enabled")
    }
  };

  return (
    

    <div>
    
       
        <Header mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />

        <UpperCase heading="Enter the text you want to convert" showAlert={showAlert}/>
       
        <Footer name="ShayanKhan."/>
        
        </div>
          
        
        


  );
}

export default App;
