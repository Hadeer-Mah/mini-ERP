import { DatePicker, SelectPicker, VStack } from "rsuite";

export default function MainInput({
  inputType = "text",
  list = [],
  placeholder,
  label,
  state = {},
  name = "",
  setState = () => {},
  disabled = false,
  isRequired = false
}) {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="text-xs block mb-1 font-medium">{label}{isRequired ? <span className="text-[var(--primary-color)]">*</span> : ""}</label>
      {inputType === "select" ? (
        <VStack>
          <SelectPicker
            id={label}
            data={list}
            value={state[name]}
            searchable={false}
            name={name}
            block
            menuClassName={""}
            placeholder={placeholder}
            onChange={(e) => {
              setState({
                ...state,
                [name]: e,
              });
            }}
          />
        </VStack>
      ) : inputType === "date" ? (
        <DatePicker
          id={label}
          block
          placeholder={placeholder}
          oneTap
          value={state[name]}
          name={name}
          onChange={(e) => {
            setState({
              ...state,
              [name]: e,
            });
          }}
        />
      ) : (
        <input
          id={label}
          type={inputType}
          onChange={(e) => {
            setState({
              ...state,
              [name]: e.target.value,
            });
          }}
          name={name}
          value={state[name]}
          className={
            "border border-[#E8E8E8] rounded-[57px] w-full p-2 main-input"
          }
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
}
