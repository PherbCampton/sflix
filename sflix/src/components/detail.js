import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Latest from './latest'
import { faShare, faHeart, faVideo, faPlay } from '@fortawesome/free-solid-svg-icons'
import MayAlso from './mayalso'

export default function Detail({name, runtime, poster, ratings, overview, released, background}) {
   
    const fixed = ratings

    return (
    <div>
        <div style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.0) ), url(${"https://image.tmdb.org/t/p/original" + background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
           
            }}>

            <div className="actions-list">
            <div className="actions">
                <span>{fixed}</span>
                <p>Rate it</p>
            </div>
            <div className="actions">
                <FontAwesomeIcon icon={faShare}/>
                <p>Share this</p>
            </div>
            <div className="actions">
                <FontAwesomeIcon icon={faHeart}/> 
                <p>Favorite</p>
            </div>
        </div>
        <div className="detailed-movie">
            <div className="detail-card">
            <img src={"https://image.tmdb.org/t/p/original" + poster} alt={name} className='detail-poster'/>
            </div>
                <div className="detailed-section">
                <h1 className="detailed-title">{name}</h1>
            <div className="detail-options">
                <strong className="HD">HD</strong>
                <div className="flex">
                <FontAwesomeIcon icon={faVideo}/>
                <p>Trailer</p>
                </div>
                <p className="yellow">IMDB: {fixed}</p>
                <p>{runtime} min</p>
            </div>
            <div className="servers">
                <div className="server">
                    <FontAwesomeIcon icon={faPlay} color="black" fontSize="16px"/>
                    <div className="sub-server">
                    <p>Server</p>
                    <p className="weight">UpCloud</p>
                    </div>
                </div>
                <div className="server">
                    <FontAwesomeIcon icon={faPlay} color="black" fontSize="16px"/>
                    <div className="sub-server">
                    <p>Server</p>
                    <p className="weight">Vidcloud</p>
                    </div>
                </div>
                <div className="server">
                    <FontAwesomeIcon icon={faPlay} color="black" fontSize="16px"/>
                    <div className="sub-server">
                    <p>Server</p>
                    <p className="weight">Streamlare</p>
                    </div>
                </div>
                <div className="server">
                    <FontAwesomeIcon icon={faPlay} color="black" fontSize="16px"/>
                    <div className="sub-server">
                    <p>Server</p>
                    <p className="weight">MixDrop</p>
                    </div>
                </div>
                <div className="server">
                    <FontAwesomeIcon icon={faPlay} color="black" fontSize="16px"/>
                    <div className="sub-server">
                    <p>Server</p>
                    <p className="weight">Hydrax</p>
                    </div>
                </div>
        
            </div>
            <div className="detailed-description">
                <div className="detailed-top-description">
                    <strong>
                        Overview:
                    </strong>
                    <p>
                        {overview}
                    </p>
                </div>
                <div className="detailed-bottom-description">
                    <div className="detailed-left-description">
                        <p><strong>Released: </strong>{released}</p>
                        <p><strong>Genre: </strong></p>
                        <p><strong>Casts: </strong>Russell Brand, Alan Arkin, Taraji P. Henson, Steve Carell, Pierre Coffin</p>
                    </div>
                    <div className="detailed-right-description">
                        <p><strong>Duration: </strong>{runtime} min</p>
                        <p><strong>Country: </strong>United States of America</p>
                        <p><strong>Production: </strong>Universal Pictures, Illumination Entertainment</p>
                    </div>
                </div>
            </div>
            <div className="watch-methods">
                <div className="watch-method">Watch {name} Online Free</div>
                <div className="watch-method">{name} Online Free</div>
                <div className="watch-method">Where to watch {name}</div>
                <div className="watch-method">{name} movie free online</div>
                <div className="watch-method">{name} free online</div>
            </div>
        </div>
            <div className="line"></div>
        </div>
        </div>
        <MayAlso mode='You may also like' urls={`https://api.themoviedb.org/3/search/movie?api_key=61eb6a9222af515ea9dc3bb91650d558&query=${name}`}/>
    </div>
    )
}