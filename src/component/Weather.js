import React, {useState} from 'react'

function WeatherComponent(){
    const [ input, setInput ] = useState('')

    const [ search, setSearch ] = useState ({})

   
    const Forecast = (e) => {
        e.preventDefault()
            .fetch('url')
            .then((Response) => {
                setInput('')
                setSearch(Response)
                console.log(Response)

            })
           

        }

}

export default WeatherComponent;