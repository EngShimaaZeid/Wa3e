import React, { useRef } from "react";
import { motion,  useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const Card = ({ title, description, buttonText, image }) => {
  const ref = useRef(null);
 
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  const rotateAmplitude = 14;
  const scaleOnHover = 1.05;

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      className="w-72 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full h-48 object-cover"  src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800" style={{ color: "#4F2C54" }}>{title}</h2>
        <p className="text-gray-600 mt-2" style={{ color: "#273A36" }}>{description}</p>
        <button   style={{ backgroundColor: "#3d5d58" }} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
