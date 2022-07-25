import "./detailed.css"
import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import Latest from "./latest";
import Detail from "./detail";

export default function DetailedPage() {
    const {movieId} = useParams()
    const componentWillUnmount = useRef(false)
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=61eb6a9222af515ea9dc3bb91650d558&append_to_response=videos`

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetchDetail()
        return () => {
            componentWillUnmount.current = true
        }
      },[movieId]);
      

    const fetchDetail = async () => {
        const data = await fetch(url)
        const movies = await data.json()
        setDetails(movies)
    }

    const moviedetail = 
            <Detail 
                name={details.original_title}
                runtime={details.runtime}
                poster={details.poster_path}
                ratings={details.vote_average}
                overview={details.overview}
                released={details.release_date}
                background={details.backdrop_path}/>
    return(
        <div>
            {moviedetail}
        </div>
    )
}