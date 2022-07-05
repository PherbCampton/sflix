import { useState, useEffect } from "react"

export default function useFecth (url) {

    const [popular, setPopular] = useState([]);

      useEffect(() => {
          fetchPopular()
        },[]);
      const fetchPopular = async () => {
          const data = await fetch(url)
          const movies = await data.json()
          setPopular(movies.results.slice(0, 3))
      }

    }