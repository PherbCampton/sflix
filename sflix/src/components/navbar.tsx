import "./navbar.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons"


export default function Navbar() {

    return (
        <nav>
             <div className="navbar">
                <div className="container nav-container">
                    <div className="left-logo">
                       <img src="./logo.png" width="30px" alt="" className="logo1"/>
                        <div className="flex">
                            <div className="browse">
                                <FontAwesomeIcon icon={faBars} fontSize="16px"/>
                                <p>Browse</p>
                            </div>
                            <form className="search-input">
                            <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="14px" color="black" />
                            <input
                                type="search" 
                                placeholder="Enter keywords..."
                            />
                            </form>
                          
                        </div>
                    </div>
                    <div className="nav-left">
                        <FontAwesomeIcon icon={faBars} className="bar" fontSize="20px"/>
                        <img src="./logo.png" width="30px" alt=""/>
                    </div>
                    <div className="nav-right">
                        <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="20px" />
                        <FontAwesomeIcon icon={faUser} fontSize="20px" />
                    </div>
                </div>
            </div>
        </nav>
    )
}