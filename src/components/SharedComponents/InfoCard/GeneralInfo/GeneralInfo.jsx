export default function GeneralInfo({ employeeData = {}, imageFile }) {
  return (
    <div className="px-3 py-5 flex flex-col gap-3">
      <div className="flex -items-center">
        <p className="font-medium text-[var(--secondary-color)] w-[150px]">
          Employee
        </p>
        <div className="flex items-center gap-1">
          {employeeData?.Image && (
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src={employeeData?.Image}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {imageFile && (
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {employeeData?.Employee}
        </div>
      </div>
      <div className="flex -items-center">
        <p className="font-medium text-[var(--secondary-color)] w-[150px]">
          Role
        </p>
        <p>{employeeData?.Role}</p>
      </div>
      <div className="flex -items-center">
        <p className="font-medium text-[var(--secondary-color)] w-[150px]">
          Email
        </p>
        <p>{employeeData?.Email}</p>
      </div>
      <div className="flex -items-center">
        <p className="font-medium text-[var(--secondary-color)] w-[150px]">
          Phone
        </p>
        <p>{employeeData?.Phone}</p>
      </div>
    </div>
  );
}
