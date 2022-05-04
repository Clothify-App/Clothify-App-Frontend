import React from "react";
import people from "../../assets/3495739.jpg";

const About = ({ setlogin }) => {
  return (
    <div className="relative  py-10  pt-44  bg-[#FDF0E0] h-screen">
      {/* <h3 className="text-center py-10  pt-28 text-3xl font-bold">About</h3> */}
      <div className="flex">
        <img src={people} className="w-1/2" alt="" />
        <h3 className="text-[#431f45] font-bold text-5xl  w-1/2 bg-[#FDF0E0] ">
          Hi from Clothify 🙌
          <hr className="w-1/2 mt-10 border-2 bg-gray-700 border-gray-700" />
          <p className="text-2xl w-3/4 mt-10">
            Clothify is the online Platform where you can put your clothes and
            rent them to other peoples.
          </p>
          <h2 className="mt-10">
            So,{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setlogin(true);
              }}
            >
              Sign up
            </span>{" "}
            Today Now
          </h2>
        </h3>
      </div>
    </div>
  );
};

export default About;
