import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ShieldIcon from "../UI/ShieldIcon";
import { FaUsers } from 'react-icons/fa';

// Import your dynamic card component
import CardCarousel from "../components/CardCarousel";

// Your data array
const carouselData = [
  {
    category: "Startup",
    title: "عنوان",
    description: ",كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبولوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    bgColor: "white",
  },
  {
    category: "Family",
    title: "عنوان",
    description: ",كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبولوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    bgColor: "white",
  },
  {
    category: "Education",
    title: "عنوان",
    description: ",كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبولوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    bgColor: "white",
  },
  ,
  {
    category: "Education",
    title: "عنوان",
    description: ",كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبولوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    bgColor: "white",
  },
  
];

const CardCarouselContainer = () => {
  return (
    <div>
       <div className="w-full relative p-6 sm:p-10 md:p-16 lg:p-20 border-gray-500 rounded-md">
        <div className="text-primaryBlue text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-end sm:justify-end md:justify-end lg:justify-center gap-4 sm:gap-2 md:gap-2 text-center sm:text-right">
    
          <div className="text-right sm:w-1/2 md:w-1/3 lg:w-auto sm:pr-2 md:pr-4">
        آخر الفعاليات 
          </div>

        <ShieldIcon
          icon={FaUsers}
          bgColor="#165eb2"
          iconColor="white"
          wsize={60}
          hsize={100}
          hoverScale={1}
        />

      </div>

      <Swiper
        
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="default-carousel border-primaryBlue "
      >
        {/* Map through data and create SwiperSlides */}
        {carouselData.map((item, index) => (
          <SwiperSlide key={index} >
            <CardCarousel {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-8 justify-center mt-4">
        <button className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-white !w-12 !h-12 transition-all duration-500 rounded-full ">
          <svg
            className="h-5 w-5 text-primaryBlue group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-white !w-12 !h-12 transition-all duration-500  ">
          <svg
            className="h-5 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="swiper-pagination mt-4 pb-32 border-primaryBlue "></div>
    </div>
    </div>
    
  );
};

export default CardCarouselContainer;