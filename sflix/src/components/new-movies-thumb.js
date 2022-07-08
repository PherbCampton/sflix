import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'


export default function NewMoviesThumb({item}) {
    return(
        <div className="new-movies">
        <div className="new-movies-card">
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt=""  className="new-movies-card"/>
        </div>
        <div className="new-movies-detail">
            <div className="new-movies-top">
                <div className="new-movies-star-rating">
                    <div className="new-movies-star"><FontAwesomeIcon icon={faStar} color="#00acc1ff"/></div>
                    <div className="new-movies-rating">{item.vote_average}</div>
                </div>
                <div className="new-movies-quality">HD</div>
            </div>
            <div className="new-movies-title">{item.original_title}</div>
            <p className="new-movies-description">{item.overview}</p>
            <div className="watch-now">
                <><FontAwesomeIcon icon={faPlay} fontSize="14px" /></>
                <>Watch now</>
            </div>
        </div>
    </div> 
    )
}