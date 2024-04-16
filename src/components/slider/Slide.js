import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import images from "../../data/Images";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Swipper.css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slide() {  
  function MySwiperComponent({ images }) {
    return (
      <div>
        {[...Array(3)].map((_, index) => (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            key={index}
            spaceBetween={15}
            slidesPerView={4}
            navigation
            pagination
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            effect="fade"
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <Link to={`/player/${idx}`}>
                  <img src={image} alt={`Slide ${idx}`} className="images" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    );
  }

  return <MySwiperComponent images={images} />;
}

export default Slide;
