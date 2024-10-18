import { useState } from "react";
import Modal from "react-responsive-modal";
import MainInput from "../../../components/SharedComponents/MainInput/MainInput";
import dotLine from "../../../assets/svgs/dots.svg";
import uploadImg from "../../../assets/svgs/uploadImage.svg";
import MainButton from "../../../components/SharedComponents/MainButton/MainButton";
import InfoCard from "../../../components/SharedComponents/InfoCard/InfoCard";
import ToggleButton from "../../../components/SharedComponents/ToggleButton/ToggleButton";

export default function AddEmployee({ openModal, setOpenModal }) {
  const [employeeData, setEmployeeData] = useState({
    Employee: "",
    StartDate: "",
    Phone: "",
    Email: "",
    Role: "",
    image: "",
    Active: true
  });
  const [activeSection, setActiveSection] = useState("Personal");
  //   const EmployeeRoles = ["IT", "Software", "Data Entry"];
  const EmployeeRoles = [
    {
      label: "IT",
      value: "IT",
    },
    {
      label: "Software",
      value: "Software",
    },
    {
      label: "DataEntry",
      value: "DataEntry",
    },
  ];
  const employeeInputs = [
    {
      typeOfInput: "text",
      placeholder: "Enter Employee Name",
      name: "Employee",
      isRequired: true,
    },
    {
      typeOfInput: "date",
      placeholder: "Start Date",
      name: "StartDate",
      isRequired: true,
    },
    {
      typeOfInput: "select",
      placeholder: "Select Role",
      name: "Role",
      options: EmployeeRoles,
      isRequired: true,
    },
    {
      typeOfInput: "email",
      placeholder: "Enter Email",
      name: "Email",
      isRequired: true,
    },
    {
      typeOfInput: "tel",
      placeholder: "Enter Phone Number",
      name: "Phone",
      isRequired: true,
    },
  ];
  function nextNavigationFunction() {
    if (activeSection === "Personal") {
      setActiveSection("Image") 
    } else if(activeSection === "Image"){
      setActiveSection("Overview")
    } else {
      setOpenModal(false);
    }
  }
  function prevNavigationFunction() {
    if (activeSection === "Image") {
      setActiveSection("Personal") 
    } else if(activeSection === "Overview"){
      setActiveSection("Image")
    }
  }
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      center
      classNames={{
        modalContainer: "modalContainer",
        modal: "modalContent",
      }}
      showCloseIcon={false}
      focusTrapped={false}
    >
      <div className="modalHeader flex border-b border-[#EDEDED] p-4">
        Add New Employee
      </div>
      <div className="modalBody py-4 px-6">
        <div className="flex justify-center mb-4">
          <div className="flex gap-2 items-center">
            <div
              className={`w-[28px] h-[28px] rounded-full ${
                activeSection === "Personal"
                  ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
                  : "bg-[var(--secondary-color)]"
              }`}
            ></div>
            <img src={dotLine} alt="line" />
            <div
              className={`w-[28px] h-[28px] rounded-full ${
                activeSection === "Image"
                  ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
                  : "bg-[var(--secondary-color)]"
              }`}
            ></div>
            <img src={dotLine} alt="line" />
            <div
              className={`w-[28px] h-[28px] rounded-full ${
                activeSection === "Overview"
                  ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
                  : "bg-[var(--secondary-color)]"
              }`}
            ></div>
          </div>
        </div>
        {activeSection === "Personal" ? (
          employeeInputs?.map((input, index) => {
            console.log(input.typeOfInput, "type")
            return (
              <MainInput
                key={index}
                inputType={input.typeOfInput}
                placeholder={input.placeholder}
                state={employeeData}
                setState={setEmployeeData}
                name={input.name}
                isRequired={input.isRequired}
                list={input.options}
              />
            );
          })
        ) : activeSection === "Image" ? (
          <>
            <p>Add Image</p>
            <div className="border-2 border-dashed border-[#B8B8B8] flex justify-center items-center w-full h-[150px] rounded-2xl mt-2">
              {employeeData?.image ? (
                <div className="flex gap-2">
                  <div className="w-[100px] rounded-lg">
                    <img
                      src={URL.createObjectURL(employeeData?.image)}
                      alt="user-img"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>{"name"}</p>
                    <div className="flex gap-4 items-center text-xs">
                      <p>Change</p>
                      <p onClick={()=> setEmployeeData({...employeeData, "image": ""})}>Delete</p>
                    </div>
                  </div>
                </div>
              ) : (
                <label htmlFor="userImg">
                  <div className="flex flex-col gap-3 items-center">
                  <img src={uploadImg} alt="upload Image" className="w-[35px]"/>
                  <div className={`px-4 py-2 rounded-[50px] cursor-pointer bg-[var(--primary-color)] text-white`}>+ Add Image</div>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    id="userImg"
                    onChange={(e) => {
                      e.target.files &&
                        setEmployeeData({
                          ...employeeData,
                          image: e.target.files[0],
                        });
                    }}
                  />
                </label>
              )}
            </div>
          </>
        ) : (
          <>
          <InfoCard title={"summary"}>
        <div className="px-3 py-5 flex flex-col gap-3">
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Employee</p>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full">
                {employeeData?.image && <img src={URL.createObjectURL(employeeData?.image)} alt="user" className="w-full h-full object-contain"/>}
              </div>
              {employeeData?.Employee}
            </div>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Role</p>
            <p>{employeeData?.Role}</p>
          </div><div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Email</p>
            <p>{employeeData?.Email}</p>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Phone</p>
            <p>{employeeData?.Phone}</p>
          </div>
        </div>
      </InfoCard>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
        <InfoCard title={"Date"}>
          <div className="flex gap-6 items-center px-3 py-5">
            <p className="font-medium text-[var(--secondary-color)]">start date</p>
            <p>{employeeData?.StartDate}</p>
          </div>
        </InfoCard>
        <InfoCard title={"Active"}>
          <div className="flex gap-6 items-center px-3 py-5">
            <p className="font-medium text-[var(--secondary-color)]">status</p>
            <ToggleButton isActive={employeeData?.Active} state={employeeData} setState={setEmployeeData} name={"Active"}/>
          </div>
        </InfoCard>
      </div>
          </>
        )}
      </div>
      <div className="modalActions flex items-center justify-between w-full p-4">
        <div>{activeSection !== "Personal" && <MainButton btnTitle={"Back"} secondaryBtn={true} onClickFn={prevNavigationFunction}/>}</div>
        <div><MainButton btnTitle={"Next"} onClickFn={nextNavigationFunction}/></div>
      </div>
    </Modal>
  );
}
