import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Weather from './components/Weather';

function App() {

  const myStyle = {
    backgroundImage:"url('https://miro.medium.com/v2/resize:fit:5120/1*GsImz-edoeuqCMfKxDus0w.jpeg')",
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
