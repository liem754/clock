import Button from "./Button";

function ItemProduct({ title }) {
  return (
    <div className="flex flex-col gap-5 p-3 border w-full ">
      <h1 className="text-3xl font-medium">{title}</h1>
      <h2 className="text-2xl font-medium text-[#d26e4b]">700,000</h2>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
        augue nec est tristique auctor. Donec non est at libero vulputate
        rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
        vulputate adipiscing cursus eu, suscipit id nulla.
        <br />
        Sku: P006
        <br />
        Categories: Butter & Eggs, Cultured Butter
        <br />
        Tag: Man
      </span>
      <div className="w-[28%]">
        <Button
          text={"Thêm vào giỏ"}
          color={"text-white"}
          bgColor={"bg-[#d26e4b]"}
          pd={"py-2 px-7"}
          fon={"text-xl"}
        />
      </div>
    </div>
  );
}

export default ItemProduct;
