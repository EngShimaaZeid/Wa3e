// UI/MenuButton.jsx

const MenuButton = ({ title, hoverBgColor = "bg-primaryBlue", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-primaryBlue font-semibold  rounded-b-2xl shadow-md lg:w-44 md:w-24 sm:w-12 h-12 hover:h-24  transition-colors duration-300 hover:${hoverBgColor} hover:text-white`}
    >
      {title}
    </button>
  );
};

export default MenuButton;
