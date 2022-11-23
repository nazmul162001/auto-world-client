import { Button } from "@material-tailwind/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const FoundCars = () => {
  return (
    <div>
      <div className="px-5">
        <h5>
          Found cars: <span>12 324</span>
        </h5>
        <div className="flex items-center gap-4 ">
          <Button variant="gradient" className="w-full">
            gradient
          </Button>
          <span className="bg-secondary inline-block text-primary p-3 rounded-md">
            <AiOutlineClose className="text-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoundCars;
