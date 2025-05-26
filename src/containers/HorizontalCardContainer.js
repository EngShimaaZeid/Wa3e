import React from "react";
import HorizontalCard from "../components/HorizontalCard";
import img1 from "../assets/images/hcimg1.png";
import img2 from "../assets/images/hcimg2.png";
import img3 from "../assets/images/hcimg3.png";
import img4 from "../assets/images/hcimg4.png";
import ShieldIcon from "../UI/ShieldIcon";
import { FaUsers } from 'react-icons/fa';
export default function HorizontalCardContainer() {
  const cards = [
    {
      imageUrl: img2,
      title: "كبار السن",
      description: "لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد",
      bgColor: "bg-darkgreen",
    },
    {
      imageUrl: img1,
      title: "استشارة الآباء",
      description: "لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد",
      bgColor: "bg-red",
    },

    {
      imageUrl: img3,
      title: "امان الاطفال",
      description: "لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد",
      bgColor: "bg-purple",
    },
    {
      imageUrl: img4,
      title: "شباب",
      description: "لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد",
      bgColor: "bg-lightgreen",
    },
  ];

  return (
    <div className="pt-12">
     
       <div className="text-primaryBlue text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-end sm:justify-end md:justify-end lg:justify-center gap-4 sm:gap-2 md:gap-2 text-center sm:text-right">
    
          <div className="text-right sm:w-1/2 md:w-1/3 lg:w-auto sm:pr-2 md:pr-4">
        تعرف على خدمات الدعم و المساندة 
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

   <div className="container  px-10 py-10 justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-right">
        {cards.map((card, index) => (
          <div key={index} className="w-full ">
            <HorizontalCard {...card} />
          </div>
        ))}
      </div>
    </div>

    </div>
    
  );
}