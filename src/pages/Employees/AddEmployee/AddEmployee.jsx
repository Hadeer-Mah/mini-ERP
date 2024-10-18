import { useState } from "react";
import { Modal } from "rsuite";
import { v4 as uuidv4 } from "uuid";
import MainInput from "../../../components/SharedComponents/MainInput/MainInput";
import dotLine from "../../../assets/svgs/dots.svg";
import uploadImg from "../../../assets/svgs/uploadImage.svg";
import change from "../../../assets/svgs/change.svg";
import trash from "../../../assets/svgs/trash.svg";
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
    Active: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [activeSection, setActiveSection] = useState("Personal");
  const EmployeeRoles = ["IT", "Software", "Data Entry"];
  const employeeInputs = [
    {
      placeholder: "Enter Employee Name",
      name: "Employee",
      isRequired: true,
      label: "Name",
    },
    {
      typeOfInput: "date",
      placeholder: "Start Date",
      name: "StartDate",
      isRequired: true,
      label: "Start Date",
    },
    {
      typeOfInput: "select",
      placeholder: "Select Role",
      name: "Role",
      options: EmployeeRoles?.map((item) => ({
        label: item,
        value: item,
      })),
      isRequired: true,
      label: "Role",
    },
    {
      typeOfInput: "email",
      placeholder: "Enter Email",
      name: "Email",
      isRequired: true,
      label: "E-mail",
    },
    {
      typeOfInput: "tel",
      placeholder: "Enter Phone Number",
      name: "Phone",
      isRequired: true,
      label: "Phone",
    },
  ];
  function nextNavigationFunction() {
    if (activeSection === "Personal") {
      setActiveSection("Image");
    } else if (activeSection === "Image") {
      setActiveSection("Overview");
    } else {
      addingEmployeeHandler();
    }
  }
  function prevNavigationFunction() {
    if (activeSection === "Image") {
      setActiveSection("Personal");
    } else if (activeSection === "Overview") {
      setActiveSection("Image");
    }
  }
  function addingEmployeeHandler() {
    if (Object.values(employeeData).some((value) => value === '')) {
      return;
    }
    const imageUrl = URL.createObjectURL(imageFile); // For demonstration, use the local URL

    const newEmployee = {
      ...employeeData,
      id: uuidv4(),
      Image: imageUrl,
    };

    // Step 3: Send a POST request to the JSON server
    fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee added:", data);
        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  }
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      backdrop
      keyboard={false}
      overflow
    >
      <Modal.Header className="border-b border-[#EDEDED] p-4">
        <Modal.Title>Add New Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 custom-scrollbar ">
        <div className="flex justify-center mb-4 mt-2">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-2 items-center">
              <div
                className={`w-[28px] h-[28px] rounded-full ${activeSection === "Personal"
                    ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
                    : "bg-[var(--secondary-color)]"
                  }`}
              ></div>
              <p
                className={`text-xs font-medium ${activeSection === "Personal"
                    ? "text-[var(--primary-color)]"
                    : "secondary-color"
                  }`}
              >
                Personal Data
              </p>
            </div>
            <img src={dotLine} alt="line" className="pb-4" />
            <div className="flex flex-col gap-2 items-center">
              <div
                className={`w-[28px] h-[28px] rounded-full ${activeSection === "Image"
                    ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
                    : "bg-[var(--secondary-color)]"
                  }`}
              ></div>
              <p
                className={`text-xs font-medium ${activeSection === "Image"
                    ? "text-[var(--primary-color)]"
                    : "secondary-color"
                  }`}
              >
                Image
              </p>
            </div>
            <img src={dotLine} alt="line" className="pb-4" />
            <div className="flex flex-col gap-2 items-center">
              <div
                className={`w-[28px] h-[28px] rounded-full ${activeSection === "Overview"
                    ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
                    : "bg-[var(--secondary-color)]"
                  }`}
              ></div>
              <p
                className={`text-xs font-medium ${activeSection === "Overview"
                    ? "text-[var(--primary-color)]"
                    : "secondary-color"
                  }`}
              >
                Overview
              </p>
            </div>
          </div>
        </div>
        {activeSection === "Personal" ? (
          employeeInputs?.map((input, index) => {
            console.log(input.typeOfInput, "type");
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
                label={input.label}
              />
            );
          })
        ) : activeSection === "Image" ? (
          <>
            <p className="font-medium">Add Image</p>
            <div
              className={`border-2 border-dashed border-[#B8B8B8] flex ${imageFile ? "justify-start" : "justify-center"
                } items-center w-full h-[150px] rounded-2xl mt-2 px-3`}
            >
              {imageFile ? (
                <div className="flex gap-4 items-center">
                  <div className="w-[120px] h-[130px] rounded-[11px] overflow-hidden">
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="user-img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-base">{imageFile?.name}</p>
                    <div className="flex gap-4 items-center text-xs">
                      <label htmlFor="changeImg" className="flex gap-1 items-center cursor-pointer text-[14px] text-[var(--secondary-color)]">
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
                        Delete
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
        ) : (
          <>
            <InfoCard title={"summary"}>
              <div className="px-3 py-5 flex flex-col gap-3">
                <div className="flex -items-center">
                  <p className="font-medium text-[var(--secondary-color)] w-[150px]">
                    Employee
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      {imageFile && (
                        <img
                          src={URL.createObjectURL(imageFile)}
                          alt="user"
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
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
            </InfoCard>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
              <InfoCard title={"Date"}>
                <div className="flex gap-6 items-center px-3 py-5">
                  <div className="font-medium text-[var(--secondary-color)]">
                    start date
                  </div>
                  <p>
                    {employeeData?.StartDate ? new Date(employeeData?.StartDate)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/-/g, " / ") : ""}
                  </p>
                </div>
              </InfoCard>
              <InfoCard title={"Active"}>
                <div className="flex gap-6 items-center px-3 py-5">
                  <p className="font-medium text-[var(--secondary-color)]">
                    status
                  </p>
                  <ToggleButton
                    isActive={employeeData?.Active}
                    state={employeeData}
                    setState={setEmployeeData}
                    name={"Active"}
                  />
                </div>
              </InfoCard>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="modalActions flex items-center w-full p-4 pt-0">
        <div>
          {activeSection !== "Personal" && (
            <MainButton
              btnTitle={"Back"}
              secondaryBtn={true}
              onClickFn={prevNavigationFunction}
            />
          )}
        </div>
        <div className="ml-auto">
          <MainButton btnTitle={"Next"} onClickFn={nextNavigationFunction} />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
