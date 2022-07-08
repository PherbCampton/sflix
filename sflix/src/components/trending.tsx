import "./trending.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Thumbnail from "./thumbnail"

export default function Trending() {


    return(
        <div>
            <div className='trending'>
                <div>
                    <h1 className="section-title">Trending</h1>
                </div>
                <div className="space-break">
                    <div className="movies">
                        <div className="play-icon">
                        <FontAwesomeIcon icon={faPlayCircle} />
                        </div>
                        <p>Movies</p>
                    </div>
                    <div className="shows">
                        <div className="list-icon">
                        <FontAwesomeIcon icon={faList} />
                        </div>
                        <p>Shows</p>
                    </div>
                </div>
            </div>
            <div className="thumbs">
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            </div>
        </div>
    )
}