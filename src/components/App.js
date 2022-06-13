// create your App component here
import React, { useState, useEffect } from "react"

function App() {
    // const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then((result) => {
                console.log(result.message)
                setIsLoaded(true)
                setImages(result.message)
            },
                // (error) => {
                //     setIsLoaded(true)
                //     setError(error)
                // }
            )
    }, [])

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={images} alt="A Random Dog" />
        </div>
    )




}

export default App