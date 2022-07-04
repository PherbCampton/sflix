import "./new-movies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function NewMovies() {
    return (
        <div className="new-movies">
            <div className="new-movies-card"></div>
            <div className="new-movies-detail">
                <div className="new-movies-top">
                    <div className="new-movies-star-rating">
                        <div className="new-movies-star"><FontAwesomeIcon icon={faStar} color="#00acc1ff"/></div>
                        <div className="new-movies-rating">5.4</div>
                    </div>
                    <div className="new-movies-quality">HD</div>
                </div>
                <div className="new-movies-title"> Everything Everywhere all at once</div>
                <div className="new-movies-description">Sure. We are always looking to expand the database of random sentences.</div>
                <div className="watch-now">
                    <><FontAwesomeIcon icon={faPlay} fontSize="14px" /></>
                    <>Watch now</>
                </div>
            </div>
        </div>
    )
}