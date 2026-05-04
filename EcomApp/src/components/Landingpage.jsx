import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
        <div>
            <Swiper
                className="landing-swiper"
                navigation={true}
                modules={[Navigation]}
                spaceBetween={36}
                slidesPerView={2}
                onSlideChange={() => console.log('Slide changed')}
            >
                <SwiperSlide>
                    <div className="slide-card">
                        <h4>Easy product management</h4>
                        <p>Use the product page to add and view your catalog in one place.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-card">
                        <h4>Customer records</h4>
                        <p>Save customer data and keep your order flow organized.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-card">
                        <h4>Order tracking</h4>
                        <p>Create orders quickly and see your sales workflow instantly.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
       
    </>
    );
};

export default LandingPage;