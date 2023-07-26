import { Link, NavLink } from "react-router-dom";
import { Icons } from "../ultils/icons";
import { path } from "../ultils/constant";
import { LinkItem } from "../ultils/constant";
import { useState } from "react";
import Modal from "../componets/modal";
const {
  MdLocationPin,
  BsFillTelephoneFill,
  BiLogoFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineSearch,
  AiFillHeart,
  BsBagHeart,
} = Icons;
function Header() {
  const [show, setShow] = useState(false);
  const Active = " font-medium  text-[#bf9375] underline underline-offset-8";
  const Noactive = "font-medium hover:text-[#bf9375]s no-underline ";
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between text-[#fff] py-2 w-full">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1">
            <MdLocationPin color="#fff" size={"20px"} />
            <p className="text-sm">
              319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
            </p>
          </span>
          <span className="flex items-center gap-1">
            <BsFillTelephoneFill color="#fff" size={"16px"} />
            <p className="text-sm">076 922 0162</p>
          </span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <BiLogoFacebook />
          <AiFillInstagram />
          <AiOutlineTwitter />
        </div>
      </div>
      <div className="flex justify-between w-full border-y-1 border-gray-100 py-3">
        <Link to={"search"} className="w-[30%] -ml-2">
          <img
            className="w-[60%]"
            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png"
            alt=""
          />
        </Link>
        <div className="flex items-center w-[50%] ">
          <input
            placeholder="Tìm kiếm..."
            className="h-[40px] w-[60%] border-none outline-none rounded-l-md p-2 focus:ring-2 focus:ring-gray-500"
            type="text"
          />
          <button className="bg-[#c89979] py-[9px] px-5 rounded-r-md">
            <AiOutlineSearch color="#fff" size={"23px"} />
          </button>
        </div>
        <div className="flex items-center gap-3 text-[white]">
          {!show && (
            <button
              className="font-medium text-md"
              onClick={() => {
                setShow(true);
              }}
            >
              ĐĂNG NHẬP
            </button>
          )}
          <AiFillHeart className="cursor-pointer" size={"20px"} />
          <BsBagHeart className="cursor-pointer -mt-2" size={"30px"} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 text-[white] py-4">
        {LinkItem &&
          LinkItem.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${Active} hover:text-[#bf9375]`
                  : `${Noactive} hover:text-[#bf9375] hover:underline hover:underline-offset-8`
              }
              key={index}
              to={item.path}
            >
              {item.text}
            </NavLink>
          ))}
      </div>
      {show && <Modal setShow={setShow} />}
    </div>
  );
}

export default Header;
