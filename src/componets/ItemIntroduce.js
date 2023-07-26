function ItemIntroduce({ Icon, title, body }) {
  return (
    <div className="flex gap-3 w-full">
      <div className="">
        <Icon size={"50px"} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-medium text-xl">{title}</h2>
        <span className="w-full">{body}</span>
      </div>
    </div>
  );
}

export default ItemIntroduce;
