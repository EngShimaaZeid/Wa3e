import ShieldCard from "./WhatWeDoCard";
import { FaUsers } from 'react-icons/fa';
import { FaProjectDiagram, FaChalkboardTeacher, FaRegLightbulb } from "react-icons/fa";
import ShieldIcon from '../../UI/ShieldIcon';
const WhatWeDoContainer = () => {
    const cards = [
        {
          title: "التشبيك",
          text: "لوريم إيبسوم دولار سيت أميت كونسيتتور...",
          icon: FaProjectDiagram,
        },
        {
          title: "تدريب",
          text: "لوريم إيبسوم دولار سيت أميت كونسيتتور...",
          icon: FaChalkboardTeacher,
        },
        {
          title: "معرفة",
          text: "لوريم إيبسوم دولار سيت أميت كونسيتتور...",
          icon: FaRegLightbulb,
        },
      ];
    

  return (
    <div className='p-12'>
         <div className="text-primaryBlue text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-end sm:justify-end md:justify-end lg:justify-center gap-4 sm:gap-2 md:gap-2 text-center sm:text-right">
    
          <div className="text-right sm:w-1/2 md:w-1/3 lg:w-auto sm:pr-2 md:pr-4">
    
        تعرف على ماذا نفعل 
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


        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 px-2 ">
     
     {cards.map((card, index) => (
       <ShieldCard
         key={index}
         bgColor="white"
         iconColor="#165eb2"
         borderColor=""
         hoverBgColor="#165eb2"
         hoverIconColor="#165eb2"
         wsize={250}
         hsize={300}
       >
         <h3 className="text-xl font-bold  p-4 text-primaryBlue">{card.title}</h3>
         <p className="text-sm mt-1 text-gray">{card.text}</p>

       </ShieldCard>
     ))}
   </div>  

    </div>
   
  );
};

export default WhatWeDoContainer;
