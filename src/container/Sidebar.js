import { Link } from "react-router-dom";
import { ItemBlog } from "../ultils/constant";
import { Icons } from "../ultils/icons";
const { AiOutlineSearch } = Icons;
function Sidebar() {
  return (
    <div className="flex flex-col border border-r-1 h-full">
      <div className="flex items-center w-full introduce7">
        <input
          placeholder="Tìm kiếm..."
          className="h-[40px] w-[60%] border border-gray-300 rounded-l-md p-2 focus:ring-2 focus:ring-gray-500"
          type="text"
        />
        <button className="bg-[#c89979] py-[9px] px-5 rounded-r-md">
          <AiOutlineSearch color="#fff" size={"23px"} />
        </button>
      </div>
      <h1 className="my-3 text-xl font-medium">Bài viết mới</h1>
      <div className="w-[85%] border border-gray-200 flex flex-col introduce8 gap-3 px-4 py-6">
        {ItemBlog &&
          ItemBlog.map((item, index) => (
            <Link
              className="flex items-center gap-2"
              key={index}
              to={item.path}
            >
              <img
                className="w-[40px] h-[40px] rounded-[50%]"
                src={item.img}
                alt=""
              />
              <h2 className="text-sm w-full leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
                {item.text}
              </h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
