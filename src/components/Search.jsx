import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCapsules } from "../actions/capsules";

const Search = () => {
  const [capsuleType, setCapsuleType] = useState("");
  const [capsuleStatus, setCapsuleStatus] = useState("");
  const [capsuleLaunchDate, setCapsuleLaunchDate] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getCapsules(1, 6, capsuleStatus, capsuleType, capsuleLaunchDate));
  };

  return (
    <section
      id="search-capsule"
      className="relative bg-gradient-to-b from-[#f8f8f8] to-[#ffffff]"
    >
      <div className="!max-w-[133rem] !my-0 !mx-auto !px-2.5 !py-0">
        <div className="mx-auto my-0 mb-40">
          <div
            className="bg-white w-full pt-16 pr-[4.5rem] pb-20 pl-[5.5rem] h-auto relative z-[4]
            rounded-[5px] flex flex-col text-[#010103] max-xs:pt-16 max-xs:pr-10 max-xs:pb-20 
            max-xs:pl-10 shadow-lg"
          >
            <h2 className="text-[2.4rem] font-bold mb-[2.7rem]">
              Search Capsules
            </h2>
            <form
              className="grid grid-cols-3 grid-rows-[auto auto] gap-8 max-md:grid-cols-1 
              max-lg:grid-cols-2"
              onSubmit={handleSearch}
            >
              <div className="flex flex-col">
                <label className="text-[1.6rem] font-semibold mb-[1.2rem]">
                  Capsule Type
                </label>
                <select
                  value={capsuleType}
                  onChange={(event) => setCapsuleType(event.target.value)}
                  className="text-[1.5rem] text-[#ababab] font-Rubik border-[1px] border-solid 
                  border-[#ccd7e6] rounded-[3px] font-normal px-[1.3rem] py-[1.2rem] outline-none"
                >
                  <option>Select capsule type</option>
                  <option value="Dragon 1.0">Dragon 1.0</option>
                  <option value="Dragon 1.1">Dragon 1.1</option>
                  <option value="Dragon 2.0">Dragon 2.0</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[1.6rem] font-semibold mb-[1.2rem]">
                  Capsule Status{" "}
                </label>
                <select
                  className="text-[1.5rem] text-[#ababab] font-Rubik border-[1px] border-solid 
                border-[#ccd7e6] rounded-[3px] font-normal px-[1.3rem] py-[1.2rem] outline-none"
                  value={capsuleStatus}
                  onChange={(event) => setCapsuleStatus(event.target.value)}
                >
                  <option>Select capsule status</option>
                  <option value="unknown">Unknown</option>
                  <option value="active">Active</option>
                  <option value="retired">Retired</option>
                  <option value="destroyed">Destroyed</option>
                </select>
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="launch__date"
                  className="text-[1.6rem] font-semibold mb-[1.2rem]"
                >
                  Launch Date{" "}
                </label>
                <input
                  className="outline-none text-[#878585] pr-12 border-[1px] border-solid
                border-[#ccd7e6] rounded-[3px]"
                  id="launch__date"
                  type="date"
                  value={capsuleLaunchDate}
                  onChange={(event) => {
                    setCapsuleLaunchDate(event.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-[1.3rem] py-[1.3rem] h-fit self-end border-none font-Rubik
              text-[1.8rem] font-medium text-white bg-[#da2128] shadow-[0_10px_15px_rgba(255,83,48,0.35)] 
              cursor-pointer transition-all delay-100 ease-in-out hover:shadow-[0_10px_15px_rgba(255,83,48,0.55)] 
              rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
