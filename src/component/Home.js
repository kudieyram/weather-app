import React, {useEffect} from 'react'
import axios from 'axios'

function HomeComponent() {

    const postAPI = "https://jsonplaceholder.typicode.com/posts"

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
