import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Weather from './components/Weather';

function App() {

  const myStyle = {
    backgroundImage:"url('https://himalayashelter.com/wp-content/uploads/2024/07/North-Face-Mount-Everest-Tibet-Autonomous-Region.webp')",
    height:"100vh",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }

  return (
   <div style={myStyle}>
     <Weather/>
   </div>
  );
}

export default App;
