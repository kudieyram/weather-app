import React, {useEffect} from 'react'
import axios from 'axios'

function HomeComponent() {

    const postAPI = "http://api.weatherstack.com/current?access_key=3500afaf26cabe97664b36cef14f09ff&query=New York"

    useEffect(() => {
        axios
        .get(postAPI)
        .then((post) => {
        console.log(post.data)    
        });
      }, );

    return (
        <div>
            
        </div>
    )
}

export default HomeComponent;
