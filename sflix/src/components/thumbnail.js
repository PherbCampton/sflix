import "./thumbnail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'



export default function Thumbnail({item}) {
    
    let ratings = item.vote_average.toFixed(1)

    return(
        <div className='thumbnail'>
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt={item.original_title} className='thumbnail-img'/>
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
                <p className='thumbnail-movie-title'>{item.original_title || item.original_name}</p>
            </div>
            <div className="thumbnail-watch-now">
                <FontAwesomeIcon icon={faPlay} fontSize="14px" />
                <>Watch now</>
            </div>
            </div>
        </div>
    )
}