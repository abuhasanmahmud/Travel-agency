import {
    faBellConcierge,
    faEarthEurope,
    faLandmarkDome,
    faMountain,
    faShip,
    faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = () => {
  return (
    <div className="bg-slate-100 pt-28">
      <div className="text-center pb-24">
        <p className="font-KaushanScript text-3xl text-blue-900">
          Browse By Category
        </p>
        <h2 className="font-WorkSans font-bold text-5xl text-blue-950">
          Pick A Tour Type
        </h2>
      </div>
      <div className="flex justify-evenly xl:px-16 mb-12">
        <div className="flex flex-col justify-center items-center rounded-md bg-white px-9 py-6 hover:shadow-xl duration-500">
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
        <div className="flex flex-col justify-center items-center rounded-md bg-white px-10 py-6 hover:shadow-xl duration-500">
          <FontAwesomeIcon
            icon={faUmbrellaBeach}
            size="xl"
            className="text-blue-950 bg-yellow-300 p-4 rounded-full"
          />
          <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
            Beaches
          </p>
          <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-white px-9 py-6 hover:shadow-xl duration-500">
          <FontAwesomeIcon
            icon={faShip}
            size="lg"
            className="text-blue-950 bg-yellow-300 p-4 rounded-full"
          />
          <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
            Boat Tours
          </p>
          <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-white px-8 py-6 hover:shadow-xl duration-500">
          <FontAwesomeIcon
            icon={faEarthEurope}
            size="xl"
            className="text-blue-950 bg-yellow-300 p-4 rounded-full"
          />
          <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
            Adventures
          </p>
          <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-white px-10 py-6 hover:shadow-xl duration-500">
          <FontAwesomeIcon
            icon={faBellConcierge}
            size="xl"
            className="text-blue-950 bg-yellow-300 p-4 rounded-full"
          />
          <p className="text-md pt-2 font-extrabold font-WixMadefor text-blue-950">
            Food
          </p>
          <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-white px-10 py-6 hover:shadow-xl duration-500">
          <FontAwesomeIcon
            icon={faMountain}
            size="lg"
            className="text-blue-950 bg-yellow-300 p-4 rounded-full"
          />
          <p className="text-md font-extrabold pt-2 font-WixMadefor text-blue-950">
            Hiking
          </p>
          <p className="text-sm font-WorkSans text-gray-600">Ten Tours+</p>
        </div>
      </div>
        <div className="grid grid-cols-2 px-52 py-24 gap-32">
          <div className="bg-blue-950 flex flex-col items-end">
            <img
              src="https://i.ibb.co/w635sx7/why-choose-us.webp"
              alt=""
              className="w-96 -mt-14"
            />
            <div className="w-full">
              <p className="text-WorkSans text-start pl-16 text-sm text-white">
                <span className="font-KaushanScript text-4xl text-white text-semibold">
                  10+{" "}
                </span>{" "}
                Years of experience
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <p className="font-KaushanScript text-2xl text-blue-900">
              Why Choose Us
            </p>
            <h2 className="text-WixMadefor font-bold text-5xl text-blue-950">
              Plan Your Trip With Trisog
            </h2>
            <p className="text-lg text-gray-500">
              Holisticly optimized productive strategic theme areas rather than
              effective manufactured products create.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1 grid gap-1">
                <p className="text-lg font-semibold text-blue-950">✓ Travel Plan</p>
                <p className="text-lg font-semibold text-blue-950">✓ Hand-picked Tour</p>
              </div>
              <div className="col-span-1 grid gap-1">
                <p className="text-lg font-semibold text-blue-950">✓ Cheap Rates</p>
                <p className="text-lg font-semibold text-blue-950">✓ Private Guide</p>
              </div>
            </div>
            <div>
            <button className="border border-blue-200 rounded-lg px-8 py-3 text-blue-950 font-semibold hover:text-white hover:bg-blue-950 duration-500">Contact Us</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Category;
