import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[url(/footer.png)] pt-[50px]">
      <div id="main_container">
        <div className="flex justify-between items-center pb-[2.5rem]">
          <figure>
            <img src="/logo.png" alt="" className="w-[140px]" />
          </figure>
          <div className="flex gap-[1rem]">
            <a
              className="footer_icons group"
              href="https://www.facebook.com/easyfruits.np"
              target="_blank"
            >
              <FaFacebookF className="footer__svg" />
            </a>
            <a
              className="footer_icons group"
              href="https://easyfruits.com.np/"
              target="_blank"
            >
              <FaTwitter className="footer__svg" />
            </a>
            <a
              className="footer_icons group"
              href="https://easyfruits.com.np/"
              target="_blank"
            >
              <FaInstagram className="footer__svg" />
            </a>
            <a
              className="footer_icons group"
              href="https://easyfruits.com.np/"
              target="_blank"
            >
              <FaYoutube className="footer__svg" />
            </a>
          </div>
        </div>
        <div className="flex justify-between px-[3rem] items-start pb-[3rem]">
          <div className="text-[#fff]  flex flex-col gap-[1rem] ">
            <h6 className="underline text-[1.25rem] font-[700] ">
              Quick Links
            </h6>
            <ul className="text-[#696969] text-[1rem] leading-[40px] font-[500]">
              <li>Home</li>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Corporate</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-[#fff]  flex flex-col gap-[1rem]">
            <h6 className="underline text-[1.25rem] font-[700] ">
              Information
            </h6>
            <ul className="text-[#696969] text-[1rem] leading-[40px] font-[500]">
              <li>FAQs</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="text-[#fff]  flex flex-col gap-[1rem]">
            <h6 className="underline text-[1.25rem] font-[700] ">Contact Us</h6>
            <ul className="text-[#696969] text-[1rem] leading-[40px] font-[500]">
              <li>
                <span className="text-[#fff]">Address: </span>Kupondole,
                Lalitpur
              </li>
              <li>
                <span className="text-[#fff]">Email: </span>
                easyfruitsnepal@gmail.com
              </li>
              <li>
                <span className="text-[#fff]">Phone: </span>+977 9802036470
              </li>
              <div className="text-[#fff] text-[1rem] leading-[40px] font-[500]">
                Payment Accepted
                <div className="flex items-center gap-[0.5rem]">
                  <img
                    src="/esewa_logo.png"
                    alt=""
                    className="w-[120px] h-fit"
                  />
                  <img src="/khalti.png" alt="" className="w-[120px]  h-fit" />
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="px-8 py-5 flex justify-between">
          <p className="text-[#fff] text-[0.9375rem] font-[500]">
            Copyright © 2023{" "}
            <span className="text-darkGreen">Easy Fruits Pvt. Ltd.</span>. All
            rights reserved.
          </p>
          <div className="flex gap-[2rem] text-[#9f9f9f] text-[0.875rem] font-[500]">
            <span className="text-darkGreen">Kupondole, Lalitpur</span>
            <span>easyfruitsnepal@gmail.com</span>
            <span>+977 9802036470</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
