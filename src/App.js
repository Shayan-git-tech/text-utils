import './App.css';
import Header from './Components/Shared/Header.js'
import Footer from './Components/Shared/Footer.js'
import UpperCase from './Components/Home/UpperCase.js'
// import image12 from './Images/image 12.png';
// import image13 from './Images/wedding-photography 1.png'
function App() {
  
 
  return (
    

    <div>
    
       
        <Header />
        


        <UpperCase heading="Enter the text you want to convert"/>
        {/* <button>
  <span className="button_top"> Button </span>
</button> */}

{/* <div className='button-wrapper'><button className='click'><span >Hover Me</span></button> </div> */}
        <Footer name="ShayanKhan."/>
        
        </div>
          
        
        


  );
}

export default App;
