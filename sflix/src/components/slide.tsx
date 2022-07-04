import "./carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Slide() {
    return(
            <li className="slide" data-active>
                <img src="https://source.unsplash.com/78A265wPiO4" alt="Nature #1"/>
                <div className="carousel-bottom-section">
                    <div className="carousel-img-card">
                    </div>
                    <div className="carousel-play-icon">
                    <FontAwesomeIcon icon={faPlay} fontSize="18px" color="#00acc1ff" />
                    </div>
                    <div className="carousel-movie-details" >
                        <div className="carousel-movie-title">The Boys</div>
                        <div className="carousel-movie-rating">
                            <div><FontAwesomeIcon icon={faStar} color="#00acc1ff"/> 8.6</div>
                            <div className="bold">HD</div>
                            <div>S2:E4</div>
                        </div>
                            <p className="carousel-movie-description">If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. </p>
                    </div>
                </div>
            </li>
    )
}