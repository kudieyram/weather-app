import React, {useState} from 'react'
import '../index.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css' 

const api = {
    key: 'e2fd4194dc08d1b66a218315cbaa87ed',
    base: 'http://api.weatherstack.com/current',
}

   
function HomeComponent () {

    const [weather, setWeather] = useState({
        "temp": "--",
         "humidity": "--",
    })

    const [country, setCountry] = useState('Ghana')

    const [city, setCity] = useState('Accra')

    //#region 
   
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

       
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const error = (e) => {
        e.preventDefault();
        if (country ==="" || city ===""){
            alert("Provide valid country & City. Try again")
            return
        }
    }

    //#endregion


    const search = (e) => { 
            error(e)
        if(country && city){ 
                    axios.get( `${api.base}?access_key=${api.key}&query=${country},${city}`)
                        .then((result) => {
                            setWeather({
                                "temp":result.data.current.temperature,
                                "humidity" : result.data.current.humidity
                                
                            });
                            console.log(result);
                        })    
            }

        }



    const dateBuilder = (d) =>{
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
                
                let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
                let day = days[d.getDay()];
                let date = d.getDate();
                let month = months[d.getMonth()];
                let year = d.getFullYear();
        
                return  `${day} ${date} ${month} ${year}`
        
            }

    return(
        <div className='login-wrapper'>
               
                <div className='search-bar'>
                        <div className='location'>{city} , {country}</div>   
                    <div className='date'>{dateBuilder(new Date())}</div> 
                </div>

                <div>
                    <div className='weather-box'>
                        <div className='temp'>
                            {weather.temp}°C
                        </div>
                        <div className='weather'><h1>{weather.humidity} %</h1></div>
                    </div>
                </div>
                    <form>
                        <div className="form-group">
                            <input type="country" className="form-control" placeholder="Country" required="required" name="country" value={country} onChange={handleCountryChange}/>
                        </div>

                        <div className="form-group">
                            <input type="city" className="form-control" placeholder="City" required="required" name="city" value={city} onChange={handleCityChange}/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block"  onClick={search}>Search</button>
                        </div>

                    </form>

                
        </div>
    )
   
}

export default HomeComponent;





