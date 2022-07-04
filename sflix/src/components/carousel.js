import "./carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from "./slide"

export default function Carousel() {
    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
      })
    })

    return (
        <div>
            <div className="carousel" data-carousel>
                <button className="carousel-button prev" data-carousel-button="prev">
                    <FontAwesomeIcon icon={faAngleLeft} fontSize="20px"/>
                </button>
                <button className="carousel-button next" data-carousel-button="next">
                    <FontAwesomeIcon icon={faAngleRight} fontSize="20px"/>
                </button>
                <ul data-slides>
                    <Slide/>
                    <li className="slide" data-active>
                    <img src="https://source.unsplash.com/78A265wPiO4" alt="Nature #1"/>
                    </li>
                    <li className="slide" >
                    <img src="https://source.unsplash.com/eOpewngf68w" alt="Nature #2"/>
                    </li>
                    <li className="slide">
                    <img src="https://source.unsplash.com/ndN00KmbJ1c" alt="Nature #3"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}