import React from "react";
import AllRoutes from "../../routes/AllRoutes";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="grid grid-cols-12">
        <div className="hidden lg:block lg:col-span-3 h-screen border-r-2 border-[#E6E6E6]  navigation">
          <NavigationBar />
        </div>
        <div className="lg:col-span-9 col-span-12 ">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
};

export default Layout;
