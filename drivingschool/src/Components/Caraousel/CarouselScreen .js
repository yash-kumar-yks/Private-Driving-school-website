import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./CarouselScreen .css";
const CarouselScreen = () => {
  const data = [
    {
      "src": "https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/crousel-images/desktop-1920x410.jpg?rev=29214d62631643abb72e240cb545828b",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/crousel-images/slide2.jpg?rev=6a0af0d0a6344b0ca948fcc89b0a34f8",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJ8_J5tqC5CYHQ8nFF-N7HhtrwsA_qcTumA&s",
      "alt": "Image 3 for carousel"
    }
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {

  setTimeout(() => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }, 4000);
  
  }, [slide])
  


  return (
    <div className="carousel">
      
      {data.map((item, idx) => {
        return (
          
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              
            ></button>
          );
        })}
      </span>
    </div>
  );
}
export default CarouselScreen