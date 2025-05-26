import ShieldIcon from '../UI/ShieldIcon';
import { FaArrowLeft } from "react-icons/fa"; // updated to left arrow

export default function HorizontalCard({
  imageUrl,
  category,
  title,
  description,
  bgColor = "white", // Default background class
}) {
  return (
    <div className="flex md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-full md:max-w-4xl mx-auto">
      {/* Content Section with Dynamic Background */}
      <div className={`p-4 sm:p-6 md:p-8 w-full md:w-3/5 ${bgColor} text-white text-right rounded-tl-6xl`}>
        <h6 className="uppercase text-sm font-medium mb-2">{category}</h6> {/* font-medium not bold */}
        <h4 className="text-xl sm:text-2xl font-extrabold mb-3">{title}</h4>
        <p className="mb-4 text-sm sm:text-base">{description}</p>
        <ShieldIcon
          icon={FaArrowLeft}
          iconColor="transparent"
          bgColor="white"
          wsize={50}
          hsize={60}
        />
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5  md:h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
