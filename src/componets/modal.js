import Button from "./Button";

function Modal({ setShow }) {
  return (
    <div
      onClick={() => setShow(false)}
      className="bg-black flex justify-center items-center bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 z-20"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShow(true);
        }}
        className="w-[50%] bg-white z-10 h-[320px] pt-5 pb-10 px-4 flex flex-col gap-3 introduce71"
      >
        <h1 className="text-2xl font-medium">Đăng nhập</h1>
        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="">
            Tên tài khoản hoặc email
          </label>
          <input type="text" className="p-2 w-full border border-gray-600" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="">
            Mật khẩu
          </label>
          <input
            type="password"
            className="p-2 w-full border border-gray-600"
          />
        </div>
        <div className="w-[20%]">
          <Button
            text={"Đăng nhập"}
            color={"text-white"}
            bgColor={"bg-[#c89979] "}
            pd={"px-5 py-2"}
          />
        </div>
        <h2 className="-mt-3 pb-5">Quên mật khẩu ?</h2>
      </div>
    </div>
  );
}

export default Modal;
