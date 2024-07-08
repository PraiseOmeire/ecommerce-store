import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FFE1DB]">
      <div className=" ml-16 mr-16 pt-16 pb-10 ">
        <div className=" lg:flex md:flex justify-between ">
          <div className=" ">
            <h4 className="font-semibold mb-4">About</h4>
            <p className="mb-4">
              More Than Wafels is a company that specializes in Delicious,
              <br />
              Artisan Belgian Waffles & Brunch treats
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 ">Customer Service</h4>
            <ul className="mb-4">
              <li>-Shipping Information</li>
              <li>-Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p>morethanwafels@gmail.com</p>
            <p className="mb-8">+2348176754434 </p>
          </div>

          <div className="flex">
            <img
              src="./images/IG.png"
              alt="ai-search"
              className="mr-8 w-[30px] h-[30px]"
            />
            <img
              src="./images/X.png"
              alt="ai-search"
              className="mr-8 w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
