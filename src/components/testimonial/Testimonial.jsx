import React from "react";

const Testimonial = () => {
  return (
    <div className="grid grid-cols-2 gap-10 px-20 bg-slate-100 py-24">
      <div className="col-span-1 grid">
        <p className="font-KaushanScript text-2xl text-blue-900">
          Why We Are Best
        </p>
        <h2 className="text-WixMadefor font-extrabold text-4xl text-blue-950">
          Keep Things
          <br />
          Flexible
        </h2>
        <div>
          <button className="border border-blue-200 rounded-lg px-8 py-3 text-blue-950 font-semibold hover:text-white hover:bg-blue-950 duration-500">
            Contact Us
          </button>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="grid">
            <div>
              <p className="font-KaushanScript text-3xl font-medium text-blue-950">
                120+
              </p>
              <p className="font-WorkSans text-gray-600">Total Destination</p>
            </div>
            <div>
              <p className="font-KaushanScript text-3xl font-medium text-blue-950">
                500+
              </p>
              <p className="font-WorkSans text-gray-600">Traavel Packages</p>
            </div>
          </div>
          <div className="grid">
            <div>
              <p className="font-KaushanScript text-3xl font-medium text-blue-950">
                12k+
              </p>
              <p className="font-WorkSans text-gray-600">Total Travelers</p>
            </div>
            <div>
              <p className="font-KaushanScript text-3xl font-medium text-blue-950">
                7k+
              </p>
              <p className="font-WorkSans text-gray-600">Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-2 gap-8">
          <div className="relative w-full h-60">
            <img
              src="https://img.freepik.com/free-photo/two-female-tourists-hold-map-find-places_1150-5742.jpg?w=740&t=st=1699610574~exp=1699611174~hmac=ab3839abfba7955188565f6e973e16134d1df2d2f4c13e78bd008b4401753c15"
              alt=""
              className="object-cover w-full h-52"
            />
          </div>
          <div className="relative w-full h-44">
            <img
              src="https://images.unsplash.com/photo-1597131527856-13cdb8dc050e?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full -mt-12"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/young-woman-sitting-hill-high-mountains_335224-424.jpg?w=740&t=st=1699611167~exp=1699611767~hmac=bc97b54418d93217225b5ddb19b7861afd55cd394774fc6b0447bd26590a243a"
            alt=""
            className="border-4 border-white w-3/5 -mt-20 z-10 ml-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
