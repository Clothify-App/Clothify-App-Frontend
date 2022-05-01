import React from "react";

const Sections = () => {
  return (
    <>
      <span className="flex m-20 items-center justify-center">
        <hr className="w-72 mx-10 bg-[#ff45e1] h-1" />
        <h3 className="text-3xl"> Top Categories to choose from </h3>
        <hr className="w-72 mx-10 bg-[#ff45e1] h-1" />
      </span>

      <div className="flex justify-between mx-36 ">
        {/* Men's Card */}
        <div className="flex justify-center z-0 h-[26rem]">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" className="relative">
              <img
                className="rounded-lg h-full w-full block"
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16236060/2022/4/21/1ac9d2fb-5bb6-45aa-af30-da65de823ede1650544776719-Anouk-Men-Navy-Blue-Pure-Cotton-Kurta-with-Trousers--Printed-1.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        {/* Kid's Card */}
        <div className="flex justify-center z-0 h-[26rem]">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-lg h-full"
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14866888/2021/8/6/eb6b456c-209f-4918-b321-b72d0c3d9b551628234781813-KID1-Boys-Mustard-Yellow--Red-Peacock-Feather-Printed-Pure-C-7.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        {/* Women's Card */}
        <div className="flex justify-center z-0 h-[26rem]">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-lg h-full"
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10234505/2019/11/19/03cda8c2-958c-4641-bb1f-8722915d5b541574137723272-W-Women-Kurta-Sets-8281574137720586-1.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
