import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper as swip } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { imagesCatalogue, imagesfav, imageTrainer } from "../../data/Images";
import "./Swipper.css";

swip.use([Navigation, Pagination, Scrollbar, A11y]);

// const images = [...imagesCatalogue, ...imagesfav];

function Slide() {  
  function MySwiperComponent({ images }) {
    return (
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          pagination
          onSlideChange={() => console.log("slide change")}
          effect="fade"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/player/${idx}`}>
                <div style={{ maxWidth: '350px', maxHeight: '600px' }}> 
                  <img src={image} alt={`Slide ${idx}`} className="images"/>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  function MyFavComponent({ images }) {
    return (
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          pagination
          onSlideChange={() => console.log("slide change")}
          effect="fade"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/player/${idx}`}>
                <div style={{ maxWidth: '350px', maxHeight: '600px' }}> 
                  <img src={image} alt={`Slide ${idx}`} className="imagesfav"/>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  function MyTrainerComponent({ images }) {
    return (
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          pagination
          onSlideChange={() => console.log("slide change")}
          effect="fade"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/player/${idx}`}>
                <div style={{ maxWidth: '350px', maxHeight: '600px' }}> 
                  <img src={image} alt={`Slide ${idx}`} className="imagesTrainer"/>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // Return both components with the corresponding arrays
  return (
    <>
      <MySwiperComponent images={imagesCatalogue} />
      <MyFavComponent images={imagesfav} />
      <MyTrainerComponent images={imageTrainer} />
    </>
  );
}

export default Slide;



