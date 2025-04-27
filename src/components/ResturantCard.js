import { Image_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const resInfo = resData.info;
  return (
    <div>
      <div className="bg-white hover:bg-gray-100 w-[300px] shadow-2xl mt-[20px] rounded-md">
        {" "}
        <img
          className=" w-[300px] h-[200px] object-cover"
          src={`${Image_URL}/${resInfo.cloudinaryImageId}`}
          alt="resturant"
        />
        <div className=" flex flex-col p-4">
          <h1
            title={resInfo.name}
            className="font-bold text-xl w-[80%] truncate text-ellipsis"
          >
            {resInfo.name}
          </h1>
          <h3 className=" w-[70%] text-ellipsis truncate">
            {resInfo.cuisines.join(", ")}
          </h3>
          <h1 className=" font-semibold text-md">{resInfo.costForTwo}</h1>
          <div className=" flex justify-between">
            <h1 className=" ">{resInfo.sla.deliveryTime} minuts</h1>
            <h1 className="res-time">{resInfo.avgRating}⭐</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResturantCard;

export const withLabelPrmoted = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-500 absolute text-xs  text-white font-bold py-1 px-2 ">
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
