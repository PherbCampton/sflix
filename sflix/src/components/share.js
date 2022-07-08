import './share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTelegram, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ShareWith({style}) {
    return (
        <div className={`share-with ${style}`}>
            <p className='share-with-text'>Share with</p>
            <div className='share-with-icons'>
                <div className='facebook-icon circle'>
                <FontAwesomeIcon icon={faFacebookF}/>
                </div>
                <div className='twitter-icon circle'>
                <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='telegram-icon circle'>
                <FontAwesomeIcon icon={faTelegramPlane} color='#0088cc'/>
                </div>
                <div className='plus-icon circle'>
                <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    )
}