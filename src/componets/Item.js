function Item({ title, body, img, text, type }) {
  return (
    <div className="flex bg-[#13140f] text-[white] pl-5 h-full items-center justify-between">
      <div className="flex w-[60%] flex-col gap-3">
        <h2 className="text-xl font-medium">{title}</h2>
        {type && <span className="border-b-2 border-yellow-200 w-[20%]"></span>}
        {text ? (
          <span>{text}</span>
        ) : (
          <div className="w-[100%] ">
            <h1 className="text-4xl font-medium">{body}</h1>
          </div>
        )}
      </div>
      <div className="w-[40%] h-full flex items-center">
        <img
          className="w-[100%] transition linear delay-200 hover:scale-125  h-[80%]"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Item;
