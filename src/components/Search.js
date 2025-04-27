import { useEffect, useState } from "react";
import { Image_URL, SEARCH_IMAGE } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.5759&lng=77.3345&str=" +
          input
      );
      const res = await data.json();
      setResult(res.data?.suggestions);
      setSearchText(res.data?.query);
      console.log("res", res.data?.suggestions);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleSelect = (t) => {
    setInput(t.text);
    navigate(`/search/${searchText}`);
    setShowResult(false);
  };

  return (
    <div className="relative h-[500px] flex flex-col justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/20"></div>
      <h1 className=" absolute top-[20%] font-extrabold text-white w-[60%] text-5xl text-center">
        Order food & groceries. Discover best restaurants. Swiggy it!
      </h1>
      <div style={{ position: "relative" }}>
        <div className="bg-white mt-[20px] rounded-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-4.5">
            🔍
          </span>
          <input
            className="bg-white w-[400px] pl-10  h-[40px] rounded-md px-2 placeholder:text-gray-500 placeholder:italic focus:outline-none focus:border-blue-500 "
            type="search"
            value={input}
            onFocus={() => {
              setShowResult(true);
            }}
            onBlur={() => {
              setShowResult(false);
            }}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Chole Bhature......"
          />
        </div>
        {showResult && input.length > 1 && (
          <div className="bg-white h-[300px] absolute top-14 w-[400px] overflow-auto mt-[20px] rounded-md scrollbar-hide">
            {result?.map((t, index) => (
              <span
                onMouseDown={() => {
                  handleSelect(t);
                }}
                className="flex  gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                key={index}
              >
                <img
                  className="w-[50px] h-[50px]"
                  src={`${SEARCH_IMAGE}/${t.cloudinaryId}`}
                  alt=""
                />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 className="font-bold "> {t.text}</h3>
                  <p style={{ color: "gray" }}>{t.subCategory}</p>
                </div>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
