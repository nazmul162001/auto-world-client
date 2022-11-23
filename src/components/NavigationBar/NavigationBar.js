import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Logo from "../../assets/image/icons.png";
import { navigationMenu } from "../../utility/navigationMenu";
import FoundCars from "../FoundCars/FoundCars";
import SloMenu from "../SloMenu/SloMenu";
import SubDropDown from "../SubDropDown/SubDropDown";

const NavigationBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div>
      <div>
        <div className="border-b-2 border-[#E6E6E6] px-5 py-2">
          <h5 className="flex items-center  gap-2 uppercase font-bold logo text-softBlack ">
            <img width={40} src={Logo} alt="logo" />
            Auto World
          </h5>
        </div>
        <ul className=" py-2">
          {navigationMenu.map((m) => (
            <SloMenu menu={m} />
          ))}
        </ul>
        <FoundCars />
      </div>
    </div>
  );
};

export default NavigationBar;
