import "./carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Slide({item}) {
    let ratings = item.vote_average.toFixed(1)

    return(
            <li className="slide" data-active>
                <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} alt="Nature #1" className="slide-backdrop"/>
                <div className="carousel-bottom-section">
                    <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt={item.original_title} className="carousel-img-card"/>
                    <div className="carousel-play-icon">
                    <FontAwesomeIcon icon={faPlay} fontSize="18px" color="#00acc1ff" />
                    </div>
                    <div className="carousel-movie-details" >
                        <div className="carousel-movie-title">{item.original_title || item.original_name}</div>
                        <div className="carousel-movie-rating">
                            <div><FontAwesomeIcon icon={faStar} color="#00acc1ff"/>{ratings}</div>
                            <div className="bold">HD</div>
                            <div>S2:E4</div>
                        </div>
                            <p className="carousel-movie-description">{item.overview}</p>
                    </div>
                </div>
            </li>
    )
}