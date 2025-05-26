import { useState, useEffect } from "react";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
import img5 from "../../../assets/images/img5.png";

const slides = [
  {
    image: img1,
    caption: "ايبسوم دولار سيت أميت لوريم ايبسوم دولار سيت أميت لوريم...",
    alt: "وصف الصورة 1"
  },
  {
    image: img2,
    caption: "ايبسوم دولار سيت أميت لوريم ايبسوم دولار سيت أميت لوريم...",
    alt: "وصف الصورة 2"
  },
  {
    image: img3,
    caption: "ايبسوم دولار سيت أميت لوريم ايبسوم دولار سيت أميت لوريم...",
    alt: "وصف الصورة 3"
  },
  {
    image: img4,
    caption: "ايبسوم دولار سيت أميت لوريم ايبسوم دولار سيت أميت لوريم...",
    alt: "وصف الصورة 4"
  },
  {
    image: img5,
    caption: "ايبسوم دولار سيت أميت لوريم ايبسوم دولار سيت أميت لوريم...",
    alt: "وصف الصورة 5"
  },
];

export default function LargeCarousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="w-full bg-lightmint py-12">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg h-[600px]">
        {/* Track container */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex flex-col"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 text-center bg-white flex-1 flex items-center justify-center">
                <p className="text-base text-gray-500 py-6 px-2">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots navigation */}
      <div className="relative top-8 left-1/2 transform -translate-x-1/2 flex gap-2 justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full ${
              current === i ? "bg-blue-600" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}