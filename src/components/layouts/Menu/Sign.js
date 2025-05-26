import ShieldIcon from "../../UI/ShieldIcon";
import { FaUser } from 'react-icons/fa';
import Button from "../../UI/Button";

const Sign = () => {
  return (
    <div className="flex items-center justify-center w-60 pr-8 " dir="rtl">
      <div className="relative inline-block group">
        {/* Shield Icon with group-hover support */}
        <div className="absolute -top-4 -start-2 z-10 px-48 pointer-events-none">
          <ShieldIcon
            icon={FaUser}
            bgColor="#2ee5c2"
            iconColor="white"
            hoverIconColor="primaryBlue"
            wsize={50}
            hsize={70}
            hoverScale={1.2}
          />
        </div>

        {/* Button */}
        <Button
          title="تسجيل الدخول"
          bgColor="#2ee5c2"
          textColor="white"
          borderColor="#2ee5c2"
          hoverBgColor="white"
          hoverTextColor="#165eb2"
          hoverBorderColor="#165eb2"
          hoverBorderWidth="2px"
          borderWidth="2px"
          size="auto"
          fontSize="16px"
          hoverFontWeight="bold"
          hoverSize="1.2"
          width="240px"
        />
      </div>
    </div>
  );
};

export default Sign;
