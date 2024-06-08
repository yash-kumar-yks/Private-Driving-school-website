import React from 'react';
import Header from '../Components/Header/Header';
import CarouselScreen from '../Components/Caraousel/CarouselScreen ';
import FindyourCity from '../Components/Map/FindyourCity';
import CoursesCard from '../Components/CoursesCard/CoursesCard';
import SliderComponent from '../Components/TestimonialSlider/TestimonialBlog'
import Footer from '../Components/Footer/Footer';

function HomePage() {
   

    return (
        <div>
        <Header/>
        <CarouselScreen/>
        <CoursesCard/>
        <FindyourCity/>
        <SliderComponent />
        <Footer/>
        </div>
    );
}

export default HomePage