import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Shared/Header.js';
import Footer from './Components/Shared/Footer.js';
import About from './Components/Home/About.js'
import UpperCase from './Components/Home/UpperCase.js';
import Alert from './Components/Home/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');  // Default to dark mode
  const [theme, setTheme] = useState(null);  // Null when no custom theme is active
  const [alert, setAlert] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);  // Track alert visibility

  // Function to show alerts
  const showAlert = (message) => {
    setAlert(message);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);  // Hide alert after 2 seconds
    }, 2000);
  };

  // Toggle Light/Dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      showAlert("Dark Mode Enabled");
    } else {
      setMode('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      showAlert("Light Mode Enabled");
    }

    // Remove any active custom theme when switching modes
    setTheme(null);
  };

  // Function to remove all theme classes
  const clearThemes = () => {
    document.body.classList.remove('koopaBeach', 'chocoMountain');
  };

  // Apply the selected theme
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    clearThemes(); // Remove any previous theme
    document.body.classList.add(newTheme);
    showAlert(`${newTheme === 'koopaBeach' ? 'Koopa Beach' : 'Choco Mountain'} Theme Enabled`);
  };

  // useEffect to apply dark mode by default
  useEffect(() => {
    document.body.classList.add('dark');  // Apply dark mode by default when app loads
  }, []);

  // useEffect to apply the selected theme whenever it changes
  useEffect(() => {
    if (theme) {
      clearThemes(); // Always clear previous themes first
      document.body.classList.remove('light', 'dark');  // Remove light/dark mode classes
      document.body.classList.add(theme);  // Apply the selected theme
    } else {
      clearThemes();  // Remove theme classes if no custom theme is active
      document.body.classList.add(mode);  // Reapply light/dark mode
    }
  }, [theme, mode]);  // Depend on both theme and mode

  return (
    <Router>
      <div>
        <Header mode={mode} toggleMode={toggleMode} setTheme={handleThemeChange} />
        <Routes>
          <Route path="/" element={<>
            <Alert alert={alert} alertVisible={alertVisible} />
            <UpperCase heading="Enter the text you want to convert" showAlert={showAlert} />
          </>} />
          <Route path="/about" element={<><About /></>} />
          
        </Routes>
        <Footer name="ShayanKhan." />
      </div>
    </Router>
  );
}

export default App;
