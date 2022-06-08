import React from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";

const Sections = () => {
  const navigate = useNavigate();
  const { setSearch } = useProduct();
  return (
    <div className="my-20">
      <span className="flex m-20 items-center justify-center">
        <hr className="w-72 mx-10 bg-[#ff45e1] h-1" />
        <h3 className="text-3xl"> Top Categories to choose from </h3>
        <hr className="w-72 mx-10 bg-[#ff45e1] h-1" />
      </span>

      <div className="flex justify-between mx-52 ">
        {/* Men's Card */}
        {/* <div className="relative group flex justify-center z-0 h-[26rem] rounded-lg shadow-lg bg-white  max-w-sm cursor-pointer duration-700 hover:scale-110">
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16236060/2022/4/21/1ac9d2fb-5bb6-45aa-af30-da65de823ede1650544776719-Anouk-Men-Navy-Blue-Pure-Cotton-Kurta-with-Trousers--Printed-1.jpg"
            className="block w-full rounded-lg h-full "
          />
          <div className="overlay rounded-lg absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 duration-200 ease-in bg-black group-hover:opacity-30">
            <h3 className="absolute text-white text-2xl top-1/2 left-1/2 ">
              Hello
            </h3>
          </div>
        </div> */}
        <div
          onClick={() => {
            setSearch("Men");
            navigate("/products");
          }}
          className="relative cursor-pointer justify-between group flex flex-col z-0 h-[28rem]  rounded-lg shadow-lg bg-white  max-w-sm  duration-700 hover:scale-110"
        >
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16236060/2022/4/21/1ac9d2fb-5bb6-45aa-af30-da65de823ede1650544776719-Anouk-Men-Navy-Blue-Pure-Cotton-Kurta-with-Trousers--Printed-1.jpg"
            className="block w-full rounded-t-lg  h-4/5 "
          />

          <div className="flex  mb-5 mx-5 mt-2 rounded-full bg-[#7394ff] text-white font-semibold">
            <button className="p-3 text-center text-white font-semibold text-lg m-auto cursor-pointer">
              Explore Men's Section
            </button>
          </div>
        </div>

        {/* Kid's Card */}
        {/* <div className="relative group flex justify-center z-0 h-[26rem] rounded-lg shadow-lg bg-white  max-w-sm cursor-pointer duration-700 hover:scale-110">
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14866888/2021/8/6/eb6b456c-209f-4918-b321-b72d0c3d9b551628234781813-KID1-Boys-Mustard-Yellow--Red-Peacock-Feather-Printed-Pure-C-7.jpg"
            className="block w-full rounded-lg h-full "
          />
          <div className="overlay rounded-lg absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 duration-200 ease-in bg-black group-hover:opacity-30"></div>
        </div> */}

        <div
          onClick={() => {
            setSearch("Kids");
            navigate("/products");
          }}
          className="relative cursor-pointer justify-between group flex flex-col z-0 h-[28rem]  rounded-lg shadow-lg bg-white  max-w-sm  duration-700 hover:scale-110"
        >
          <img
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15303310/2021/8/30/e62ebb17-5f1d-4b67-bb35-9152d73d0f451630313142876VASTRAMAYBoysMulticolouredFloralEmbroideredRegularKurtawithP1.jpg"
            className="block w-full rounded-t-lg  h-4/5 "
          />

          <div className="flex  mb-5 mx-5 mt-2 rounded-full bg-[#ff9292] text-white font-semibold">
            <button className="p-3 text-center text-white font-semibold text-lg m-auto cursor-pointer">
              Explore Kid's Section
            </button>
          </div>
        </div>

        {/* Women's Card */}

        <div
          onClick={() => {
            setSearch("Female");
            navigate("/products");
          }}
          className="relative cursor-pointer justify-between group flex flex-col z-0 h-[28rem]  rounded-lg shadow-lg bg-white  max-w-sm  duration-700 hover:scale-110"
        >
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10234505/2019/11/19/03cda8c2-958c-4641-bb1f-8722915d5b541574137723272-W-Women-Kurta-Sets-8281574137720586-1.jpg"
            className="block w-full rounded-t-lg  h-4/5 "
          />

          <div className="flex  mb-5 mx-5 mt-2 rounded-full bg-pink-400 text-white font-semibold">
            <button className="p-3 text-center text-white font-semibold text-lg m-auto cursor-pointer">
              Explore Women's Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
