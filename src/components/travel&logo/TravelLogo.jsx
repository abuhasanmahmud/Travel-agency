import { faLandmarkDome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TravelLogo = () => {
  return (
    <>
      <div
        className="bg-[url('https://img.freepik.com/free-photo/winter-scenery-ropeway-surrounded-by-snowy-mountains_181624-14863.jpg?w=740&t=st=1699615707~exp=1699616307~hmac=17a065623b6c00f52b374613bbc5821b62f6b2fa950ba475540d79af484b7f96')] bg-no-repeat bg-cover bg-center grid grid-cols-2 gap-20 place-items-center relative px-20"
        style={{ height: "80vh" }}
      >
        <div className="grid gap-7 col-span-1 z-10">
          <p className="font-KaushanScript text-2xl text-white">
            Are you ready to travel?
          </p>
          <h2 className="text-WixMadefor font-bold text-4xl text-white">
            Tevily is a World Leading Online Tour Booking
            <br />
            Platform
          </h2>
          <div>
            <button className="border border-white rounded-lg px-8 py-3 font-semibold text-white hover:text-black hover:bg-white duration-500">
              Contact Us
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 z-10">
          <div className="grid gap-8 col-span-1">
            <div className="grid place-items-center bg-white px-9 py-6 hover:shadow-xl duration-500">
              <FontAwesomeIcon
                icon={faLandmarkDome}
                size="lg"
                className="text-blue-950 bg-yellow-300 p-4 rounded-full"
              />
              <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
                City Tours
              </p>
              <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
            </div>
            <div className="grid place-items-center bg-white px-9 py-6 hover:shadow-xl duration-500">
              <FontAwesomeIcon
                icon={faLandmarkDome}
                size="lg"
                className="text-blue-950 bg-yellow-300 p-4 rounded-full"
              />
              <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
                City Tours
              </p>
              <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
            </div>
          </div>
          <div className="grid gap-8 col-span-1">
            <div className="grid place-items-center bg-white px-9 py-6 hover:shadow-xl duration-500">
              <FontAwesomeIcon
                icon={faLandmarkDome}
                size="lg"
                className="text-blue-950 bg-yellow-300 p-4 rounded-full"
              />
              <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
                City Tours
              </p>
              <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
            </div>
            <div className="grid place-items-center bg-white px-9 py-6 hover:shadow-xl duration-500">
              <FontAwesomeIcon
                icon={faLandmarkDome}
                size="lg"
                className="text-blue-950 bg-yellow-300 p-4 rounded-full"
              />
              <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
                City Tours
              </p>
              <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="bg-blue-900 h-52">
        <p className="font-KaushanScript text-2xl text-yellow-300 text-center pt-12">
          Are you ready to travel?
        </p>
        <div className="flex justify-evenly items-center pt-5">
          <img
            src="https://i.ibb.co/CMs3hh8/h7-banner-h-img-8.png"
            alt=""
            className="w-24"
          />
          <img
            src="https://i.ibb.co/Fm2RXff/h7-banner-h-img-6.png"
            alt=""
            className="w-24"
          />
          <img
            src="https://i.ibb.co/z6cGrxd/h7-banner-h-img-3-1.png"
            alt=""
            className="w-24"
          />
          <img
            src="https://i.ibb.co/hVdVMxj/home-7-slider-graphic-3.png"
            alt=""
            className="w-24"
          />
          <img
            src="https://i.ibb.co/0Vckv7t/home-7-slider-graphic-1.png"
            alt=""
            className="w-24"
          />
        </div>
      </div>
    </>
  );
};

export default TravelLogo;
