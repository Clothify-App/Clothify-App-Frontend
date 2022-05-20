import React from "react";

const Contact = () => {
  return (
    <div className="flex  flex-col w-1/2 m-auto mt-16 top-1/2">
      <h3 className="text-3xl text-center mb-8">
        Please fill free to send us your review.
      </h3>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="name"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="email"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="message"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Message
          </label>
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="message"
            rows={3}
            placeholder="Leave your message here"
            defaultValue={""}
          />
        </div>
      </div>

      <div className="flex border-pink border-2 w-1/2 m-auto my-5 bg-pink-500 rounded-md cursor-pointer active:scale-[0.98]">
        <button type="submit" className="p-3 m-auto text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
