import { useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useResturantList } from "../hooks/useResturantList";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const onLineStatus = useOnlineStatus();
  const { resTopList, filterTopRated, resetList, searchRes } =
    useResturantList();
  console.log("🚀 ~ CardContainer ~ resTopList:", resTopList);
  const handleFilter = () => {
    filterTopRated();
  };
  const handleReset = () => {
    resetList();
  };

  if (onLineStatus === false) {
    return <h1>Offline Please Check your Internet</h1>;
  }

  return resTopList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="container mx-auto p-2 ">
        <div className=" flex flex-col py-10 justify-center items-center ">
          <h1 className=" text-3xl text-center">Best Food Restaurants Item</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="bg-white mt-[50px] rounded-md">
              <div className="flex gap-2">
                <input
                  className="bg-[#e5e5e5] w-[400px]   h-[40px] border-[#848484] rounded-md px-2 placeholder:text-gray-500 placeholder:italic focus:outline-none focus:border-blue-500 "
                  type="search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Chole Bhature......"
                />
                <button
                  className="bg-[#7C5130] px-2 py-2 cursor-pointer w-[100px] text-white rounded-md"
                  onClick={() => {
                    searchRes(searchText);
                  }}
                >
                  Search
                </button>
                <button
                  className="bg-[#7C5130] px-2 py-2 cursor-pointer w-[100px] text-white rounded-md"
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Reset
                </button>
                <button
                  className="bg-[#7C5130] px-2 py-2 cursor-pointer w-[200px] text-white rounded-md"
                  onClick={() => {
                    handleFilter();
                  }}
                >
                  Top Rated Restaurants
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-[50px] items-center justify-center ">
            {resTopList?.map((res, index) => {
              return (
                <Link key={index} to={`/restaurant/${res?.info?.id}`}>
                  <ResturantCard resData={res} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
