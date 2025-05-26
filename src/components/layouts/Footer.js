import footerImg from '../../assets/images/footer.png'; 
import Button from '../UI/Button';
import ShieldIcon from '../UI/ShieldIcon';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
  <footer dir="rtl" 
    className="w-full min-h-[150px] sm:min-h-[200px] bg-repeat bg-top text-primaryBlue px-4 py-0 sm:py-2"
    style={{
      backgroundImage: `url(${footerImg})`,
      backgroundSize: 'auto',
    }}>
   <div class="container max-w-full px-6">

      <div class="sm:flex sm:flex-wrap sm:-mx-4  md:py-4">
        <div class="p-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
          <h5 class="text-3xl font-bold mb-4">سجل الأن</h5>
          <ul class="list-none footer-links">
            <li class="mb-2  text-xs leading-6  text-primaryBlue">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل او .
            </li>
          </ul>
          <Button title="تسجيل دخول" />

        </div>
        <div class="p-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
          <h5 class="text-3xl font-bold mb-6">نشرة واعي</h5>
          <ul class="list-none footer-links">
            <li class="mb-2 text-xs leading-6 ">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل او .
            </li>
          </ul>
          <Button title="برجاء إدخال بريدك الإلكتروني" />

        </div>
        <div class="p-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
          <h5 class="text-3xl font-bold mb-6">إستفسارات</h5>
          <ul class="list-none footer-links">
            <li class="mb-2 text-xs leading-6">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل او .
            </li>
          </ul>
          <Button title="تواصلوا معنا" />

        </div>
        <div class="p-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
          <h5 class="text-3xl font-bold mb-6">تابعونا على</h5>
          <ul class="list-none footer-links">
            <li class="mb-2 text-xs leading-6">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل او .
            </li>
          </ul>
          <div className="flex gap-4 px-8">
            <ShieldIcon icon={FaLinkedinIn} bgColor="#165eb2" textColor="text-white" wsize={50} hsize={60}/>
            <ShieldIcon icon={FaFacebookF} bgColor="#165eb2" textColor="text-white" wsize={50} hsize={60} />
          </div>
        </div>
        
      </div>
      
    </div>
</footer>
  )
}

export default Footer
