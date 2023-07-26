import { Icons } from "../ultils/icons";
import Button from "../componets/Button";
const { MdLocationPin, BsFillTelephoneFill, MdEmail } = Icons;
function Contact() {
  return (
    <div className="flex flex-col bg-white items-center  pb-6 mb-5">
      <div className="flex w-[70%] my-11 justify-between gap-3 border-y-4">
        <div className="flex gap-1 flex-1">
          <MdLocationPin className="mt-1" size={"40px"} />
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium">Địa chỉ:</h1>
            <h2>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</h2>
          </div>
        </div>
        <div className="flex gap-1 flex-1">
          <BsFillTelephoneFill className="mt-2 mr-1" size={"26px"} />
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium">Điện thoại</h1>
            <h2>
              1900 636 648
              <br />
              Bấm 109 – Phòng kinh doanh
              <br />
              Bấm 103 – Phòng kỹ thuật
            </h2>
          </div>
        </div>
        <div className="flex gap-1 flex-1">
          <MdEmail className="mt-1" size={"35px"} />
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium">Email</h1>
            <h2>
              demonhunterg@gmail.com
              <br />
              mon@mona.media
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[70%] flex flex-col gap-2 my-11 border-b-2 border-black pb-5 items-center">
        <div className="flex w-[70%] justify-center gap-2">
          <input
            type="text"
            className="border-2 w-[50%] p-2 bg-[#f1f1f1]"
            placeholder="Họ và tên"
          />
          <input
            type="text"
            className="border-2 w-[50%] p-2 bg-[#f1f1f1]"
            placeholder="Email"
          />
        </div>
        <div className="flex w-[70%] justify-center gap-2">
          <input
            type="text"
            className="border-2 w-[50%] p-2 bg-[#f1f1f1]"
            placeholder="Số điện thoại"
          />
          <input
            type="text"
            className="border-2 w-[50%] p-2 bg-[#f1f1f1]"
            placeholder="Địa chỉ"
          />
        </div>
        <div className="mt-1 w-[70%]">
          <textarea
            className="bg-[#f1f1f1] p-3 w-full"
            name=""
            placeholder="Lời nhắn"
            id=""
            cols="89"
            rows="10"
          ></textarea>
        </div>
        <Button
          text={"Gửi"}
          color={"text-white"}
          bgColor={"bg-[#c89979]"}
          pd={"px-[100px] py-1"}
        />
      </div>
    </div>
  );
}

export default Contact;
