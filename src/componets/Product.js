import { product } from "../ultils/constant";
import Button from "./Button";
function Product({ img, name, price }) {
  return (
    <div className="p-2 w-full shadow-xl border border-gray-400">
      <div className=" border-b border-gray-400">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col p-3 text-center gap-1">
        <h2>{name}</h2>
        <h2>{price}</h2>
        <Button
          text={"Thêm vào giỏ"}
          bgColor={"bg-[#c89979]"}
          color={"text-[white]"}
          pd={"py-1"}
        />
      </div>
    </div>
  );
}

export default Product;
