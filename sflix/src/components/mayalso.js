import "./trending.css"
import { useEffect, useState, useRef } from "react"
import Thumbnail from "./thumbnail"

export default function MayAlso({urls}) {

    const [popular, setPopular] = useState([]);


    const componentWillUnmount = useRef(false)

    const url = urls
    useEffect(() => {
        fetchPopular()
        return () => {
            componentWillUnmount.current = true
        }
      },[url]);

      useEffect(()=> {
        
      })

    const fetchPopular = async () => {
        const data = await fetch(url, { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
        const movies = await data.json() 
        setPopular(movies.results)
        
    }

    const movie = popular.map(item => {
      return (
      <Thumbnail key={item.id} item={item} />
      )
    })


    return(
        <div>
            <div className='trending'>
                <div>
                    <h1 className="section-title">You may also like</h1>
                </div>
            </div>
            <div className="thumbs">
                {movie} 
            </div>
        </div>
    )
}