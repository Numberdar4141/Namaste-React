import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useContext } from "react";
import userContext from "../api/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onLineStatus = useOnlineStatus();
  const { user } = useContext(userContext);
  const itemList = useSelector((store) => store.cart.item);

  const handleBtnName = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className="bg-white shadow-sm  font-sans sticky  ">
      <div className="container mx-auto px-4 sm:px-3 p-3 lg:px-2">
        <div className="flex justify-between">
          <img src={LOGO_URL} className="w-[50px] object-contain" alt="logo" />
          <div className="flex gap-6">
            <div className="flex gap-2 my-auto">
              <h1>Online Status : {onLineStatus ? "🟢" : "🔴"}</h1>
            </div>
            <ul className="flex gap-4 my-auto">
              <li>
                <Link to={"/"}>Home</Link>
              </li>{" "}
              <li>
                {" "}
                <Link to={"/about"}>About</Link>
              </li>{" "}
              <li>
                {" "}
                <Link to={"/grocery"}> Grocery</Link>
              </li>{" "}
              <li>
                {" "}
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                {" "}
                <Link to={"/cart"}>Cart-({itemList.length} Item)</Link>
              </li>
              <li>🤵 {user}</li>{" "}
            </ul>
          </div>
          <button
            onClick={() => handleBtnName()}
            className="bg-[#7C5130] px-2 py-2 cursor-pointer w-[100px] text-white rounded-md"
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
