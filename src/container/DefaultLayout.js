import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout() {
  return (
    <div className="w-full flex flex-col items-center bg-[#333333] relative ">
      <div className="flex w-[70%]">
        <Header />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
