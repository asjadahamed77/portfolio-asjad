import React from "react";
import { useParams } from "react-router-dom";
import { myWorks } from "../assets/MyWorks";

const WorkDetails = () => {
  const { id } = useParams();
  const currentItem = myWorks.find((item) => item.id === id);

  return (
    currentItem && (
      <div className="px-4 sm:px-20 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-2 w-fit">
              <h1 className="text-2xl md:text-4xl font-semibold">
                {currentItem.name}
              </h1>
              <span className="w-8 h-1 rounded-full bg-white/50"></span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
            <img src={currentItem.imageFile} alt={currentItem.name} className="w-full h-full rounded-xl"/>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default WorkDetails;
