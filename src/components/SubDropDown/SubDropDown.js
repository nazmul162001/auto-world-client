import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";

const SubDropDown = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 260 }}
      transition={{ duration: 0.5 }}
      className="block mt-5"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <h5 className="flex flex-col bg-white py-1 px-3 rounded-md w-full">
            <span className="text-softBlack">Price from:</span>
            <span className="font-bold text-softBlack">$21 000</span>
          </h5>
          <h5 className="flex flex-col bg-white py-1 px-3 rounded-md w-full">
            <span className="text-softBlack">Price up to:</span>
            <span className="font-bold text-softBlack">$21 000</span>
          </h5>
        </div>
        <input className="w-full mt-3" type="range" />
        <ul>
          <li className="flex items-center gap-1 bg-white rounded-md  mb-3">
            <Checkbox id="check" color="blue" defaultChecked />
            <label htmlFor="check" className="text-softBlack text-sm">
              Possible bargaining
            </label>
          </li>
          <li className="flex items-center gap-1 bg-white rounded-md mb-3">
            <Checkbox id="check" color="blue" defaultChecked />
            <label htmlFor="check" className="text-softBlack text-sm">
              Exchange for real estate
            </label>
          </li>
          <li className="flex items-center gap-1 bg-white rounded-md ">
            <Checkbox id="check" color="blue" defaultChecked />
            <label htmlFor="check" className="text-softBlack text-sm">
              Car exchange
            </label>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SubDropDown;
