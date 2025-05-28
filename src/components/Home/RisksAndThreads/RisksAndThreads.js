import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShieldIcon from "../../UI/ShieldIcon";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import img1 from "../../../assets/images/imgcar00.png";
import img2 from "../../../assets/images/imgcar0.png";
import img3 from "../../../assets/images/imgcar1.png";
import img4 from "../../../assets/images/imgcar2.png";
import img5 from "../../../assets/images/imgcar3.png";
import img6 from "../../../assets/images/imgcar4.png";

const cards = [
  { id: 1, src: img1, title: "محتوى غير لائق" },
  { id: 2, src: img2, title: "التنمر الإلكتروني" },
  { id: 3, src: img3, title: "الإستغلال الجنسي" },
  { id: 4, src: img4, title: "الألعاب " },
  { id: 5, src: img5, title: "مخاطر أخرى " },
  { id: 6, src: img6, title: "إرسال محتوى جنسى" },
];

const ImageCarousel = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-12 bg-babyblue">
      {/* Title */}
      <div className="text-primaryBlue text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-end sm:justify-end md:justify-end lg:justify-center gap-4 sm:gap-2 md:gap-2 text-center sm:text-right">
        <div className="text-right sm:w-1/2 md:w-1/3 lg:w-auto sm:pr-2 md:pr-4">
          أهم المخاطر والتهديدات الإلكترونيه 
        </div>
        <ShieldIcon
          icon={HiChevronRight}
          bgColor="#165eb2"
          iconColor="white"
          wsize={60}
          hsize={100}
          hoverScale={1}
        />
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto px-8 py-8">

        {/* Custom Prev Arrow */}
        <div id="custom-prev" className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
          <button className="p-2 rounded-full hover:bg-gray-200/50 transition duration-300 bg-transparent">
            <HiChevronLeft size={30} className="text-primaryBlue" />
          </button>
        </div>

        {/* Custom Next Arrow */}
        <div id="custom-next" className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
          <button className="p-2 rounded-full hover:bg-gray-200/50 transition duration-300 bg-transparent">
            <HiChevronRight size={30} className="text-primaryBlue" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '#custom-next',
            prevEl: '#custom-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-babyblue rounded-3xl overflow-hidden flex flex-col justify-center items-center text-center p-2 transition-transform duration-300 hover:scale-105">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-80 object-contain rounded-6xl"
                />
                <h2 className="text-lg font-semibold text-primaryBlue mt-2">
                  {card.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
