import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../utils/constants";

export const useResturantList = () => {
  const [resTopList, setResTopList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_URL);
      const json = await data.json();
      const restaurant =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResTopList(restaurant);
      setOriginalList(restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  const filterTopRated = () => {
    const filtered = originalList.filter((res) => res.info.avgRating > 4.8);
    setResTopList(filtered);
  };

  const resetList = () => {
    setResTopList(originalList);
  };

  const searchRes = (searchText) => {
    const filtered = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("🚀 ~ filtered ~ filtered:", filtered);
    setResTopList(filtered);
  };

  return { resTopList, filterTopRated, resetList, searchRes };
};
