import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const ResturantList = () => {
  const params = useParams();
  const location = useLocation();
  const item = location.state;
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.5759&lng=77.3345&str=" +
        params.searchText +
        "&trackingId=undefined&submitAction=SUGGESTION" +
        "&queryUniqueId=" +
        item.queryUniqueId +
        "&metaData=" +
        item.metadata +
        "&selectedPLTab=" +
        item.type
    );
    const json = await data.json();
    setResult(
      json?.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    console.log(
      "ResturantList -> json",
      json?.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0]?.card
        ?.card?.info
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {result?.map((res) => {
        return (
          <div
            className="p-2 mt-4 rounded-md bg-white shadow-md container max-w-[1000px] mx-auto"
            key={res?.card?.card?.info.id}
          >
            <h1>{res?.card?.card?.info.name}</h1>
            <h3>{res?.card?.card?.info.cuisines.join(", ")}</h3>
            <h3>{res?.card?.card?.info.costForTwo}</h3>
            <h3>{res?.card?.card?.info.areaName}</h3>
            <h3>
              {res?.card?.card?.info.sla.deliveryTime} min
            </h3>
          </div>
        );
      })}
    </div>
  );
};
