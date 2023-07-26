import Button from "./Button";

function BlogContact() {
  return (
    <div className="flex flex-col bg-[#f2f2f2] my-4 border-2">
      <div className="py-3 px-5">
        <h2 className="font-medium text-lg">Trả lời</h2>
        <h3 className="my-2">
          Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
          được đánh dấu *
        </h3>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium text-sm">
            Bình luận
          </label>
          <textarea
            name="text"
            className="px-3 py-2 focus:ring outline outline-1 focus:outline-none focus:ring-blue-400"
            rows="7"
            cols="6"
            wrap="soft"
          ></textarea>
        </div>
        <div className="flex justify-between my-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Tên</label>
            <input className="border border-gray-500" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input type="text" className="border border-gray-500" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Trang web</label>
            <input type="text" className="border border-gray-500" />
          </div>
        </div>
        <Button
          text={"Phản hồi"}
          color={"text-white"}
          bgColor={"bg-[#c89979]"}
          pd={"px-6 py-2"}
        />
      </div>
    </div>
  );
}

export default BlogContact;
