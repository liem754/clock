import { Link } from "react-router-dom";
import Product from "../componets/Product";
import { ItemBlog, menProduct } from "../ultils/constant";

function MenWatch() {
  return (
    <div className="flex bg-white justify-center">
      <div className="w-[70%] my-12 flex gap-4 border-b-4 pb-12">
        <div className="w-[30%] border-r-2">
          <h2 className="font-medium mb-1">Danh mục sản phầm</h2>
          <div className="border w-[85%] p-3 flex flex-col gap-3">
            <div className="flex w-full items-center gap-2 introduce">
              <img
                className="w-[50px] h-[50px] rounded-[50%] border"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-12.jpg"
                alt=""
              />
              <div className="">
                <h2>Simple 7</h2>
                <h3>700,000 đ</h3>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 introduce11">
              <img
                className="w-[50px] h-[50px] rounded-[50%] border"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-08.jpg"
                alt=""
              />
              <div className="">
                <h2>Simple 3</h2>
                <h3>700,000 đ</h3>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 introduce12">
              <img
                className="w-[50px] h-[50px] rounded-[50%] border"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-02.png"
                alt=""
              />
              <div className="">
                <h2>Classico 1</h2>
                <h3>700,000 đ</h3>
              </div>
            </div>
          </div>
          <h2 className="mt-5 font-medium mb-1">Bài viết mới nhất</h2>
          <div className="w-[85%] border border-gray-200 flex flex-col gap-3 px-4 py-6 introduce8">
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
        <div className="w-[70%] border p-3 flex gap-2">
          {menProduct &&
            menProduct.map((item, index) => (
              <Link to={item.path} className="w-[24%] introduce1">
                <Product img={item.img} name={item.name} price={item.price} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MenWatch;
