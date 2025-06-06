import ShieldIcon from "../../UI/ShieldIcon";
import img from "../../../assets/images/imgcardcar.png";

const CardCarousel = ({ category, title, description, bgColor = "bg-blue-500" }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden border-2 px-8 border-gray-100 rounded-3xl">
      {/* Image Section (Left on md+) */}
      <div className="w-full md:w-2/5 h-30 md:h-auto p-6 md:p-14 pr-6 md:pr-12 flex justify-center items-center">
        <ShieldIcon
          imgSrc={img}
          bgColor="#165eb2"
          wsize={150}
          hsize={150}
        />
      </div>

      {/* Content Section (Right on md+) */}
      <div className={`${bgColor} md:p-8 w-full md:w-3/5 text-white pl-4 md:pl-0 text-right`}>
        <h6 className="uppercase text-xs md:text-sm font-semibold mb-1 md:mb-2">{category}</h6>
        <h4 className="text-xl md:text-2xl font-extrabold mb-6 md:mb-12 sm:mb-12 text-primaryBlue">{title}</h4>
        <p className="mb-2 md:mb-4 text-gray-500 text-xs md:text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;
