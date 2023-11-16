import { faCalendar, faFlag, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:py-10 lg:pb-24 bg-blue-900 w-full">
        <div className="col-span-1 flex flex-col gap-4 lg:pt-20 md:pt-14 sm:pt-10  pl-3 sm:ml-10 pb-4">
          <p className="font-KaushanScript text-3xl text-yellow-400">Explore The</p>
          <p className="font-WorkSans font-bold lg:text-5xl md:text-3xl sm:text-2xl text-white">
            Travel & Adventures
          </p>
          <p className="font-WixMadefor text-base text-white">
            Find awesome hotel, tour, car and activities in Lodon
          </p>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="">
            <img
              src="https://img.freepik.com/free-photo/young-woman-sitting-boat-sunny-day_1140-179.jpg?w=740&t=st=1699542270~exp=1699542870~hmac=c2df1ea5cd249a950696383d55346d52662f9f79b2ee47cb8d4d1791ce0c2d62"
              alt=""
              // className="xl:w-72 sm:w-full -mr-14 h-72"
              class="max-w-full h-auto md:max-w-md lg:max-w-lg xl:max-w-xl  lg:h-72"
            />
          </div>
          <div className="">
            <img
              src="https://img.freepik.com/free-photo/vertical-shot-female-hiker-enjoys-amazing-nature-view-stands-back-camera-stones_273609-25698.jpg?w=360&t=st=1699533037~exp=1699533637~hmac=381434be1bba0309e59908201df74e32d7f934f7b56c87f3012f1b37578c3388"
              alt=""
              // className="xl:w-72"
              class="max-w-full h-auto md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center md:-mt-60 sm:-mt-40 -mt-32 mb-12">
        <div className="grid  xl:grid-cols-5  sm:grid-cols-3 justify-center items-center gap-3 bg-white  p-6 border rounded-lg ">
          <div>
            <p className="font-KaushanScript font-medium text-blue-900">
              <FontAwesomeIcon icon={faPaperPlane} /> Destination
            </p>
            <input
              type="text"
              name="Destination"
              id=""
              placeholder="&#xf1d8;"
              className="border border-gray-300 py-1 rounded-lg focus:outline-none focus:ring focus:border-grey-300 pl-2 text-gray-500"
            />
          </div>

          <div>
            <p className="font-KaushanScript font-medium text-blue-900">
              <FontAwesomeIcon icon={faFlag} /> Type
            </p>
            <input
              type="text"
              name="Activity"
              id=""
              placeholder="&#xf024;"
              className="border border-gray-300 py-1 rounded-lg focus:outline-none focus:ring focus:border-grey-300 pl-2 text-gray-500"
            />
          </div>
          <div>
            <p className="font-KaushanScript font-medium text-blue-900">
              <FontAwesomeIcon icon={faCalendar} /> When
            </p>
            <input
              type="datetime-local"
              name="Date"
              id=""
              className="border border-gray-300 py-1 rounded-lg focus:outline-none focus:ring focus:border-grey-300 pl-2 text-gray-500"
            />
          </div>

          <div>
            <p className="font-KaushanScript font-medium text-blue-900">
              <FontAwesomeIcon icon={faUserGroup} /> Guests
            </p>
            <input
              type="number"
              name="Guests"
              id=""
              placeholder="&#xf0c0;"
              className="appearance-none leading-tight border border-gray-300 py-1 rounded-lg focus:outline-none focus:ring focus:border-grey-300 text-gray-500"
              style={{
                WebkitAppearance: "none",
                margin: 0,
                MozAppearance: "textfield",
              }}
            />
          </div>
          <div>
            <div className="flex items-center pt-3">
              <button
                type="submit"
                className="font-WorkSans font-semibold px-6 py-2 bg-yellow-400 rounded-xl"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
