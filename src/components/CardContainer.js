import { useContext, useState } from "react";
import ResturantCard, { withLabelPrmoted } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useResturantList } from "../hooks/useResturantList";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import UserContext from "../api/UserContext";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  const onLineStatus = useOnlineStatus();
  const ResturantCardPrmoted = withLabelPrmoted(ResturantCard);
  const { resTopList, filterTopRated, resetList, searchRes } =
    useResturantList();
  const handleFilter = () => {
    filterTopRated();
  };
  const handleReset = () => {
    resetList();
    setSearchText("");
  };

  if (onLineStatus === false) {
    return <h1>Offline Please Check your Internet</h1>;
  }

  return (
    <div>
      <div className="container mx-auto h-screen p-2 ">
        <div className=" flex flex-col py-10 justify-center items-center ">
          <h1 className=" text-3xl text-center">Best Food Restaurants Item</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="bg-white mt-[50px] rounded-md">
              <div className="flex gap-2">
                <input
                  className="bg-[#e5e5e5] w-[400px]   h-[40px] border-[#848484] rounded-md px-2 placeholder:text-gray-500 placeholder:italic focus:outline-none focus:border-blue-500 "
                  type="search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    if (e.target.value === "") {
                      handleReset();
                    }
                  }}
                  placeholder="Search Restaurant"
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
                <input
                  className="bg-[#e5e5e5] w-[400px]   h-[40px] border-[#848484] rounded-md px-2 placeholder:text-gray-500 placeholder:italic focus:outline-none focus:border-blue-500 "
                  type="search"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Change UserName"
                />
              </div>
            </div>
          </div>
          {resTopList.length === 0 && (
            <h1 className="text-5xl text-center mt-[100px] font-bold">
              No Restaurants Found
            </h1>
          )}
          <div className="flex flex-wrap gap-4 mt-[50px] items-center justify-center ">
            {resTopList?.map((res, index) => {
              return (
                <Link key={index} to={`/restaurant/${res?.info?.id}`}>
                  {res.info.availability?.opened ? (
                    <ResturantCardPrmoted resData={res} />
                  ) : (
                    <ResturantCard resData={res} />
                  )}
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
