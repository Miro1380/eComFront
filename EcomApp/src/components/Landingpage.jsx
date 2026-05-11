import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from "./Carousel";
import Footer from "./Footer";

function LandingPage(){

    return(
    <>
        <Navbar></Navbar>
        <div className="text-center">
            <h3 className="display-2 mx-auto bg-light mt-3">Ecom Demo Homepage</h3>
            <p>This is the homepage with three links at the top. Each one allows you to make a request to add a new customer,product,order.</p>
            <p> Each link will take you to the respective viewing page. e.g. The 'add product' page will also allow you to view the current products available.</p>
            <p> There is no authorization required to view the pages. As such, its still a work in progress, more of a p.o.c. Thanks for checking it out.</p>
        </div>
        <div className="container mt-5 mb-5" style={{maxWidth:"700px", position:'relative', overflow:'hidden'}}>
            <Carousel></Carousel>
        </div>
        <Footer/>        
        
       
    </>
    );
};

export default LandingPage;