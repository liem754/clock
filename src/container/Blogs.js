import { Outlet, useLocation, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Blog() {
  const param = useLocation();
  console.log(param.pathname === "/blog");
  return (
    <div className="flex bg-white justify-center">
      <div className="w-[70%] flex my-11 gap-5 pt-3 py-12   border-gray-500 border-b-4">
        <div className="w-[30%]">
          <Sidebar />
        </div>
        {param.pathname === "/blog" ? (
          <div className="w-[70%] flex flex-wrap gap-5">
            <div className="flex flex-col flex-1 border-2 introduce1">
              <Link>
                <img
                  className="w-full h-[200px]"
                  src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-4.jpg"
                  alt=""
                />
              </Link>
              <div className="p-1">
                <Link
                  to="chiec-dong-ho-cua-nhung-ceo"
                  className="font-medium hover:text-[#bc9073] overflow-hidden overflow-ellipsis line-clamp-2"
                >
                  Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                </Link>
                <span className="text-sm mt-3 overflow-hidden overflow-ellipsis line-clamp-2">
                  Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ
                  là ...{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 border-2 introduce2">
              <Link>
                <img
                  className="w-full h-[200px]"
                  src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
                  alt=""
                />
              </Link>
              <div className="p-1">
                <Link
                  to={"12-chiec-dong-ho-danh-cho-nu"}
                  className="font-medium hover:text-[#bc9073] overflow-hidden overflow-ellipsis line-clamp-2"
                >
                  12 chiếc đồng hồ dành cho nữ đắc nhất mọi thời đại
                </Link>
                <span className="text-sm mt-3 overflow-hidden overflow-ellipsis line-clamp-2">
                  Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại
                  trong hai ...
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 border-2 introduce2">
              <Link>
                <img
                  className="w-full h-[200px]"
                  src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg"
                  alt=""
                />
              </Link>
              <div className="p-1">
                <Link
                  to={"10-thuong-hieu-dong-ho-cao-cap"}
                  className="font-medium hover:text-[#bc9073] overflow-hidden overflow-ellipsis line-clamp-2"
                >
                  10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan
                  tâm, Rolex xếp hạng số 3
                </Link>
                <span className="text-sm mt-3 overflow-hidden overflow-ellipsis line-clamp-2">
                  1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis
                  Audemars và Edward-Auguste Piguet, ...
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[70%]">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
