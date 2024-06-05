import { LocationSvg, MailSvg, PhoneSvg } from "../../components/Svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-[#000] text-[#fff] text-[0.875rem] py-[0.8rem]">
      <div id="main_container" className="flex justify-between items-center">
        <div className="flex gap-[2rem]">
          <p className="flex gap-[0.5rem] font-[500] items-center justify-center">
            <PhoneSvg />
            <a href="tel:+977 9802036470">+977 9802036470</a>
          </p>
          <p className="flex  gap-[0.5rem] font-[500] items-center justify-center">
            <MailSvg />
            <a href="mailto:easyfruitsnepal@gmail.com">
              easyfruitsnepal@gmail.com
            </a>
          </p>
          <p className="flex  gap-[0.5rem] font-[500] items-center justify-center">
            <LocationSvg />
            <a href="mailto:easyfruitsnepal@gmail.com">Kupondole, Lalitpur</a>
          </p>
        </div>
        <div className="flex gap-[1rem]">
          <a href="https://www.facebook.com/easyfruits.np" target="_blank">
            <FaFacebookF className="text-lg hover:text-orange" />
          </a>
          <a href="https://easyfruits.com.np/" target="_blank">
            <FaTwitter className="text-lg hover:text-orange" />
          </a>
          <a href="https://easyfruits.com.np/" target="_blank">
            <FaInstagram className="text-lg hover:text-orange" />
          </a>
          <a href="https://easyfruits.com.np/" target="_blank">
            <FaYoutube className="text-lg hover:text-orange" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
