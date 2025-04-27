import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ResturantList = () => {
  const params = useParams();
  console.log("🚀 ~ ResturantList ~ params:", params);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.5759&lng=77.3345&str=Pizza&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=7d6e982a-1a52-b351-08c5-3a4a069bcd29&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FPizza.png%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT"
    );
    const json = await data.json();
    "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.5759&lng=77.3345&str=Burger&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=8ed47be9-dbf1-1aa8-da17-57cfe5ce4fad&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FBurger.png%22%2C%22dishFamilyId%22%3A%22846649%22%2C%22dishFamilyIds%22%3A%5B%22846649%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D"
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>ResturantList</div>;
};
