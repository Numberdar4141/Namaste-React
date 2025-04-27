import { useParams } from "react-router-dom";
import { useResturantMenu } from "../hooks/useResturantMenu";
import Shimmer from "./Shimmer";
import { RESTAURANT_DETAILS_IMAGE_URL } from "../utils/constants";
import { ResturantCatogery } from "./ResturantCatogery";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [exapndIndex, setExapndIndex] = useState(-1);
  const { resInfo, itemCards, categories } = useResturantMenu(resId);

  const catogoriesList = categories.filter(
    (cat) =>
      cat.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto p-3 mt-5 max-w-[1000px] ">
      <div className="bg-white  rounded-md">
        <div
          style={{
            backgroundImage: `url(${RESTAURANT_DETAILS_IMAGE_URL}${itemCards[4]?.card?.info?.imageId})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="flex  justify-end text-end shadow-md p-4 rounded-xl gap-2"
        >
          <div className="flex flex-col">
            <h1 className="text-3xl text-[#7C5130] font-bold">
              {resInfo?.name}
            </h1>
            <h3 className="text-xl">{resInfo?.cuisines?.join(", ")}</h3>
            <h3 className="text-2xl font-semibold ">
              {resInfo?.costForTwoMessage}
            </h3>
            <h3 className="text-xl">{resInfo?.avgRating}⭐</h3>
          </div>
        </div>
        <h2 className="text-2xl mt-4 font-bold">Menu</h2>
        {catogoriesList.map((cat, index) => {
          return (
            <ResturantCatogery
              key={index}
              setshowItem={() => setExapndIndex(exapndIndex === index ? -1 : index)}
              showItem={exapndIndex === index}
              data={cat.card.card}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ResturantMenu;
