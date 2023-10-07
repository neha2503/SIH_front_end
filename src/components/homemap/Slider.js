import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'

const dataSlider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== 10){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === 10){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(10)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                        src={process.env.PUBLIC_URL + `/images/img${index + 1}.png`}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        </div>
    )
}

// 
// <div className="container-dots">
//     {Array.from({length: 10}).map((item, index) => (
//         <div
//         onClick={() => moveDot(index + 1)}
//         className={slideIndex === index + 1 ? "dot active" : "dot"}
//         ></div>
//     ))}
// </div>
            // BEFORE THE LAST </DIV>
