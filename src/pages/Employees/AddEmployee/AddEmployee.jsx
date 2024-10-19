import { useState } from "react";
import { Message, Modal, useToaster } from "rsuite";
import { v4 as uuidv4 } from "uuid";
import MainInput from "../../../components/SharedComponents/MainInput/MainInput";
import MainButton from "../../../components/SharedComponents/MainButton/MainButton";
import InfoCard from "../../../components/SharedComponents/InfoCard/InfoCard";
import ImageUpload from "../../../components/SharedComponents/MainInput/ImageUpload/ImageUpload";
import ProgressionSteps from "../../../components/SharedComponents/ProgressionSteps/ProgressionSteps";

export default function AddEmployee({ openModal, setOpenModal }) {
  const toaster = useToaster();
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
      setActiveSection("Preview");
    } else {
      addingEmployeeHandler();
    }
  }

  function prevNavigationFunction() {
    if (activeSection === "Image") {
      setActiveSection("Personal");
    } else if (activeSection === "Preview") {
      setActiveSection("Image");
    }
  }

  function addingEmployeeHandler() {
    if (Object.values(employeeData).some((value) => value === "")) {
      toaster.push(
        <Message type="error" closable>
          You must fill the required inputs first
        </Message>,
        {
          placement: "topCenter",
          duration: 4000,
        }
      );
      return;
    }
    const convertImageToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        if (file) {
          reader.readAsDataURL(file);
        } else {
          resolve(null);
        }
      });
    };

    convertImageToBase64(imageFile)
      .then((base64Image) => {
        const newEmployee = {
          ...employeeData,
          id: uuidv4(),
          Image: base64Image,
        };

        return fetch("http://localhost:8000/employees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmployee),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        toaster.push(
          <Message type="success" closable>
            Employee added successfully
          </Message>,
          {
            placement: "topCenter",
            duration: 2000,
          }
        );
        setTimeout(() => {
          setOpenModal(false);
          window.location.reload();
        }, 2000);
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
      className="box-shadow"
    >
      <Modal.Header className="border-b border-[#EDEDED] p-4">
        <Modal.Title>Add New Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 custom-scrollbar ">
        <div className="flex justify-center mb-4 mt-2">
          <ProgressionSteps activeSection={activeSection} />
        </div>
        {activeSection === "Personal" ? (
          employeeInputs?.map((input, index) => {
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
          <ImageUpload imageFile={imageFile} setImageFile={setImageFile} />
        ) : (
          <>
            <InfoCard
              title={"summary"}
              dataType={"general"}
              employee={employeeData}
              imageFile={imageFile}
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
              <InfoCard
                title={"Date"}
                dataType={"date"}
                employee={employeeData}
              />

              <InfoCard
                title={"Active"}
                dataType={"status"}
                employee={employeeData}
                state={employeeData}
                setState={setEmployeeData}
                name={"Active"}
              />
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
          <MainButton
            btnTitle={activeSection === "Preview" ? "Apply" : "Next"}
            onClickFn={nextNavigationFunction}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
