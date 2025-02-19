import React,{useState} from "react";
import axios from "axios";

const Weather = () => {

  const [city, setCity] = useState("")
  const [weatherdata, setWeatherdata] = useState(null)


  const apiKey = "4ff0ca58a7b93466b89aa404c428f2b0";

  const fetchData = async () =>{
     try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      setWeatherdata(response.data)
      console.log(response)
     }
     catch(error){
      console.error(error);
      
     }
  }

  const handleInputChange =  (e) =>{
     setCity(e.target.value)
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      fetchData();
      setCity("");
  }

  return (
    <div className="container py-3 text-center text-light fw-semibold">
      <h3 className="mb-4"><i class="bi bi-cloud-sun-fill"></i> Weather App</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control w-50 mx-auto d-block mb-3" placeholder="Enter City Name" value={city} onChange={handleInputChange}/>
        <button type="submit" className="btn btn-success btn-sm w-50 mx-auto d-block fw-semibold mb-3">Get Weather</button>
      </form>
      {weatherdata ?(
      <>
      <h5>Weather Data : {weatherdata.name}</h5>
      <p>Temperature : {weatherdata.main.temp}°C</p>
      <p>Description : {weatherdata.weather[0].description}</p>
      <p>Feels Like : {weatherdata.main.feels_like}°C</p>
      <p>Humidity : {weatherdata.main.humidity}%</p>
      <p>Pressure : {weatherdata.main.pressure}</p>
      <p>Wind Speed : {weatherdata.wind.speed}m/s</p>
      </>
      ):(
        <p>Please Enter City Name</p>
      )
}
    </div>
  );
};

export default Weather;
