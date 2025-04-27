import { useParams } from "react-router-dom";
import { useResturantMenu } from "../hooks/useResturantMenu";
import Shimmer from "./Shimmer";
import { RESTAURANT_DETAILS_IMAGE_URL } from "../utils/constants";

const ResturantMenu = () => {
  const { resId } = useParams();
  const { resInfo, itemCards } = useResturantMenu(resId);

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
        <ul className="mt-4 bg-white flex flex-col gap-8">
          {itemCards.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="flex items-center p-4 cursor-pointer rounded-md shadow-md justify-between"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">
                  {item?.card?.info?.name}
                </span>
                <span className="text-xl font-bold">
                  Rs.{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
                <span
                  title={item?.card?.info?.description}
                  className="text-sm w-[80%] line-clamp-2"
                >
                  {item?.card?.info?.description}
                </span>
              </div>
              <img
                src={`${RESTAURANT_DETAILS_IMAGE_URL}${item?.card?.info?.imageId}`}
                className="w-[200px] rounded-2xl"
                alt="resturant"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ResturantMenu;
