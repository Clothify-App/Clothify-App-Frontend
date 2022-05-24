import React, { useEffect, useState } from "react";
import men from "../../assets/men.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import MiniProductCard from "./MiniProductCard";
import ProfilePhoto from "./ProfilePhoto";
import ContactChange from "./ContactChange";
import { useAuth } from "../../Context/AuthContext";
import usersServices from "../../Services/users.services";
function Profile() {
  const { userID } = useAuth();
  const [userName, setUserName] = useState();
  const [imgURL, setImgURL] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [address, setAddress] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const FetchUser = async () => {
      try {
        const user = (await usersServices.getUser(userID)).data();
        setImgURL(user.image);
        setEmail(user.email);
        setUserName(user.fullName);
        setPhoneNo(user.phoneNo || "Update Mobile");
        setAddress(user.address || "Update Address");
      } catch (err) {
        console.log(err);
      }
    };
    FetchUser();
  }, []);

  return (
    <div className="shadow-md rounded-3xl innerContainer h-full w-[100%] bg-white py-5 px-6 flex justify-evenly">
      <div className="leftInfo flex-[0.35] border-2 rounded-md flex flex-col">
        <div className="leftImageContainer h-[40%] w-full object-contain p-3 bg-[#F5F5F5] relative">
          <img
            src={imgURL}
            alt=""
            className="h-[100%] w-[100%] object-contain"
          />
          {/* {console.log(imgURL)} */}
          <div className={`editImage absolute bottom-0 right-0 p-2`}>
            <span className="cursor-pointer">
              <ProfilePhoto setimgURL={setImgURL} />
            </span>
          </div>
        </div>
        <div className="leftContactInfo p-3 h-[60%]">
          <div className="option1 flex justify-between">
            <h3 className="font-bold">Contact Details</h3>
            <span>
              <ContactChange
                userName={userName}
                phoneNo={phoneNo}
                address={address}
                setUserName={setUserName}
                setPhoneNo={setPhoneNo}
                setAddress={setAddress}
              />
            </span>
          </div>
          <div className="leftTextOption flex flex-col my-2 border-b-2">
            <p className="mb-1 ">Name</p>
            <div className="innerText">
              <p className="text-lg">{userName}</p>
            </div>
          </div>
          <div className="leftTextOption flex flex-col my-2 border-b-2">
            <p className="mb-1">Email</p>
            <div className="innerText flex justify-between">
              <p className="text-lg">{email}</p>
              <span>
                <AiOutlineMail />
              </span>
            </div>
          </div>
          <div className="leftTextOption flex flex-col my-2 border-b-2">
            <p className="mb-1">Phone Number</p>
            <div className="innerText flex justify-between">
              <span className="text-lg ">
                +91 <span className="text-gray-500 ml-5">{phoneNo}</span>
              </span>
              <span>
                <BsTelephone />
              </span>
            </div>
          </div>
          <div className="leftTextOption flex flex-col my-2 border-b-2">
            <p className="mb-1">Address</p>
            <div className="innerText flex-wrap break-words">
              <p className="text-lg text-gray-500">{address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightInfo flex-[0.45] border-2 rounded-md flex flex-col">
        <div className="rightTopText border-b-2 flex-[0.1] flex items-center">
          <h2 className="w-full  text-center text-2xl font-bold">
            Your Rented Products
          </h2>
        </div>
        <div className="rightMiddleSection flex-[0.8] flex flex-col p-2 overflow-y-scroll">
          <MiniProductCard />
          <MiniProductCard />
          <MiniProductCard />
          <MiniProductCard />
          <MiniProductCard />
        </div>
        <div className="decriptionText flex-[0.1] p-2">
          <p className="text-sm">
            Disclaimer: If AnyKind Of fault or damaged Occured in product User
            will gets charged for Product whole original Price.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
