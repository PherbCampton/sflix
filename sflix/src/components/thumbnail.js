import "./thumbnail.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'



export default function Thumbnail({item}) {
    
    let ratings = item.vote_average.toFixed(1)
    let title = item.original_title || item.original_name
    let name = title.replaceAll(' ', '+');
    let id = item.id


    return(
        <div className='thumbnail'>
            <Link to={`/movie/${id}`}><div className="thumbnail-img-div">
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt={item.original_title} className='thumbnail-img'/>
                </div></Link>
            <div className="thumbnail-details">
            <div className='thumbnail-top-details'>
                <div className='thumbnail-star-rating'>
                    <FontAwesomeIcon icon={faStar} color="#00acc1ff"/>
                    <p className='thumbnail-rating'>{ratings}</p>
                </div>
                <p className='thumbnail-movie-quality'>HD</p>
                <p className='thumbnail-movie-release-year'>{item.release_date || item.first_air_date}</p>
            </div>
            <div className="thumbnail-movie-title-div">
            <Link to={`/movie/${id}`}><p className='thumbnail-movie-title'>{item.original_title || item.original_name}</p></Link>
            </div>
            <Link to={`/movie/${id}`}><div className="thumbnail-watch-now">
                <FontAwesomeIcon icon={faPlay} fontSize="14px" />
                <>Watch now</>
            </div></Link>
            </div>
        </div>
    )
}