import React, { useState } from "react";
import { ItemCards } from "./ItemCards";

export const ResturantCatogery = ({ data, setshowItem, showItem }) => {
  return (
    <div>
      <div className="bg-gray-100 p-4 mt-4 rounded-md">
        <div
          onClick={setshowItem}
          className="justify-between cursor-pointer  flex"
        >
          <h1 className="text-lg font-bold">
            {" "}
            {data.title} ({data.itemCards.length})
          </h1>

            <span>{showItem ? "-" : "+"}</span>
        </div>
        <div>{showItem && <ItemCards itemCards={data.itemCards} />}</div>
      </div>
    </div>
  );
};
