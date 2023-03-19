import React from "react";
import NoSearchFound from "../images/not-found/not-found.gif";

const NotFound = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center -mt-20 mb-20">
      <img
        src={NoSearchFound}
        alt="capsule-not-found"
        className="h-auto w-[50rem] border-none"
      />
      <span
        className="flex w-full items-center justify-center font-semibold text-gray-500 xsm:text-base 
      text-[1.75rem]"
      >
        No results found.
      </span>
      <span className="flex w-full items-center justify-center text-gray-500 text-[1.25rem]">
        Try searching for something else.
      </span>
    </div>
  );
};

export default NotFound;
