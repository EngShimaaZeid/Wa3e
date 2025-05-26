// CardsContainer.js
import CardItem from '../components/CardItem';
const data = [
  { id: 1, text: "لوريم ابسم 1" },
  { id: 2, text: "لوريم ابسم 2" },
  { id: 3, text: "لوريم ابسم 3" },
  { id: 4, text: "لوريم ابسم 4" },
  { id: 5, text: "لوريم ابسم 5" },
  { id: 6, text: "لوريم ابسم 6" },
  { id: 7, text: "لوريم ابسم 7" },
  { id: 8, text: "لوريم ابسم 8" },
  { id: 9, text: "لوريم ابسم 9" },
];

const CardItemContainer = () => {
  return (
    <div className='p-24 pt-12 bg-babyblue rounded-t-full'>
      
        <div className="text-primaryBlue text-4xl  font-bold flex items-center  justify-center  ">
           <div className='p-8  font-extrabold'>
            القائمة السريعة
            </div>
       
        </div>
    <div className="flex flex-col gap-4 max-w-4xl mx-auto p-4 text-primaryBlue">
      {/* Row 1 */}
      <div className="flex justify-between gap-4 ">
        {data.slice(0, 3).map(item => (
          <CardItem key={item.id} text={item.text} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex justify-between gap-4">
        {data.slice(3, 6).map(item => (
          <CardItem key={item.id} text={item.text} />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex justify-between gap-4">
        {data.slice(6, 9).map(item => (
          <CardItem key={item.id} text={item.text} />
        ))
    }
      </div>
    </div>
    </div>
  );
};

export default CardItemContainer;