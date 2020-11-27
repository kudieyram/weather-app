import React, {useState} from 'react'
import '../index.css'

const api = {
    key: '6253a19bc7876a9980d1770327c69cfd',
    base: 'https://api.openweathermap.org/data/2.5/',
}

function HomeComponent () {

    const [queryState, setQueryState] = useState({
        query:'',
    })

    const [weatherState, setWeatherState] = useState({
        weather: {},
    })

    const handleQueryChange = (e) => {
        setQueryState=e.target.value
    }

    const handleWeatherChange = (e) => {
        setWeatherState=e.target.value    
    }

    const search = evt => {
                if (evt.key === "enter") {
                    fetch( `${api.base}weather?q=${queryState}&units=metrics&APPID=${api.key}`)
                        .then(result => Response.json())
                        .then(result => {
                            setQueryState('');
                            setWeatherState(result);
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
            <main>
                <div className='search-bar'>
                    <input type='text' className='search-bar' placeholder='Search...' value={queryState.query} onChange={handleQueryChange}/>
                    <div className='location-box'></div>
                    <div className='location'>Accra, Ghana</div>   
                    <div className='date'>{dateBuilder(new Date())}</div> 
                </div>
                <div>
                    <div className='weather-box' value={weatherState.weather} onChange={handleWeatherChange}>
                        <div className='temp'>
                            15°C
                        </div>
                        <div className='weather'> Sunny</div>
                    </div>
                </div>
            </main>
        </div>
    )
   
}

export default HomeComponent;





// function HomeComponent() {
//     const [queryState, setQueryState] = useState({
//         query: '',
//     });
       

//     const [weather, setWeather] = useState({});

//     const handleOnchange = (e) => {
//         setQueryState({
//             'query': e.target.value
//         })
//     }

//         const search = evt => {
//         if (evt.key === "enter") {
//             fetch( `${api.base}weather?q=${queryState}&units=metrics&APPID=${api.key}`)
//                 .then(result => Response.json())
//                 .then(result => {
//                     setQueryState('');
//                     setWeather(result);
//                     console.log(result);
//                 })    
//     }

//     const dateBuilder = (d) =>{
//         let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
        
//         let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//         let day = days[d.getDay()];
//         let date = d.getDate();
//         let month = months[d.getMonth()];
//         let year = d.getFullYear();

//         return  `${day} ${date} ${month} ${year}`

//     }

//     return (
//         <div className='login-wrapper'>
//             <main>
//                 <div className='search-bar'>
//                     <input type='text' className='search-bar'placeholder='Search...' onChange={handleOnchange} value= {queryState.query}>
//                     </input>
//                     <div className='location-box'></div>
//                     <div className='location'>New York City, US</div>
//                     <div className='date'>{dateBuilder(new Date())}</div>
//                 </div>
//                 <div className='weather-box'>
//                     <div className='temp'>
//                         15°C
//                     </div>
//                     <div className='weather'>Sunny</div>
//                 </div>
//             </main>
            
            
//         </div>
//     )
// }
// }

// export default HomeComponent;
