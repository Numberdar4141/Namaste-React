import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

export const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState({});
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU_URL + resId);
      const json = await data.json();
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
      setItemCards(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      console.log(err);
    }
  };
  return { resInfo, itemCards };
};
