import { useDispatch } from "react-redux";
import { RESTAURANT_DETAILS_IMAGE_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";

export const ItemCards = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {" "}
      <ul className="mt-4  flex flex-col gap-4">
        {itemCards?.map((item) => (
          <li
            key={item?.card?.info?.id}
            className="flex items-center bg-white p-4 cursor-pointer rounded-md shadow-md justify-between"
          >
            <div className="flex flex-col w-[60%]">
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
                className="text-sm text-gray-500 w-[60%] line-clamp-3"
              >
                {item?.card?.info?.description}
              </span>
            </div>
            <div className="relative">
              <img
                src={`${RESTAURANT_DETAILS_IMAGE_URL}${item?.card?.info?.imageId}`}
                className="w-[130px] h-[130px]  rounded-2xl"
                alt="resturant"
              />
              <button
                onClick={() => handleAddItem(item)}
                className="bg-green-500 w-[80%] cursor-pointer hover:bg-green-700  absolute -bottom-[10px] left-4 right-0 text-white p-1 rounded-md"
              >
                + ADD
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
