import "./carousel.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from "./slide"

export default function Carousel() {

        let [count, setCount] = useState(3)

        function increment(){
            setCount(count + 1)
        }

        function decrement(){
            setCount(count - 1)
        }


        const [popular, setPopular] = useState([]);
        const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=${count}`
        useEffect(() => {
            fetchPopular()
        },[count]);
        const fetchPopular = async () => {
            const data = await fetch(url)
            const movies = await data.json()
            setPopular(movies.results.slice(0, 1))
        }

        const movie = popular.map(item => {
        return (
        <Slide key={item.id} item={item} />
            )
        })

    return (
        <div>
            <div className="carousel" data-carousel>
                <button onClick={decrement} className="carousel-button prev" data-carousel-button="prev">
                    <FontAwesomeIcon icon={faAngleLeft} fontSize="20px"/>
                </button>
                <button onClick={increment} className="carousel-button next" data-carousel-button="next">
                    <FontAwesomeIcon icon={faAngleRight} fontSize="20px"/>
                </button>
                <ul data-slides>
                    {movie}
            
                </ul>
            </div>
        </div>
    )
}