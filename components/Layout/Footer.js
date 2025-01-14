import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">IHearYou.io</strong> is an AI-powered therapeutic companion.
          </p>
          <p className="text-gray-400">©{new Date().getFullYear()} - IHearYou.io</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              How it works{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Waitlist{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
