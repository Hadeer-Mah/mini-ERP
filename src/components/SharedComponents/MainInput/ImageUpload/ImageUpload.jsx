import uploadImg from "../../../../assets/svgs/uploadImage.svg";
import change from "../../../../assets/svgs/change.svg";
import trash from "../../../../assets/svgs/trash.svg";

export default function ImageUpload({imageFile, setImageFile = () => {}}) {
  return (
    <>
            <p className="font-medium">Add Image</p>
            <div
              className={`border-2 border-dashed border-[#B8B8B8] flex ${
                imageFile ? "justify-start" : "justify-center"
              } items-center w-full h-[150px] rounded-2xl mt-2 px-3`}
            >
              {imageFile ? (
                <div className="flex gap-4 items-center">
                  <div className="w-[120px] h-[130px] rounded-[11px] overflow-hidden">
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="user-img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-base">{imageFile?.name}</p>
                    <div className="flex gap-4 items-center text-xs">
                      <label
                        htmlFor="changeImg"
                        className="flex gap-1 items-center cursor-pointer text-[14px] text-[var(--secondary-color)]"
                      >
                        <img src={change} alt="change" />
                        Change
                        <input
                          type="file"
                          className="hidden"
                          id="changeImg"
                          onChange={(e) => {
                            e.target.files && setImageFile(e.target.files[0]);
                          }}
                        />
                      </label>
                      <div
                        className="flex gap-1 items-center cursor-pointer text-[14px] text-[var(--secondary-color)]"
                        onClick={() => setImageFile(null)}
                      >
                        <img src={trash} alt="" />
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <label htmlFor="userImg">
                  <div className="flex flex-col gap-3 items-center">
                    <img
                      src={uploadImg}
                      alt="upload Image"
                      className="w-[32px]"
                    />
                    <div
                      className={`px-4 py-2 text-sm rounded-[50px] cursor-pointer bg-[var(--primary-color)] text-white`}
                    >
                      + Add Image
                    </div>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    id="userImg"
                    onChange={(e) => {
                      e.target.files && setImageFile(e.target.files[0]);
                    }}
                  />
                </label>
              )}
            </div>
          </>
  )
}
