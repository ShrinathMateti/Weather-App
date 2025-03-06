import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Weather from './components/Weather';

function App() {

  const myStyle = {
    backgroundImage:"url('https://media.istockphoto.com/id/1223738331/photo/panoramic-59-mpix-xxxxl-size-view-of-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=tbyjhHnTUNXyQsqB7UzVsjGwWiSNtwJeFB1Ven3LGjs=')",
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
