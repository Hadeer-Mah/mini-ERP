import Select from "react-select/base";
import "./MainInput.scss";
import { DatePicker, SelectPicker, VStack } from "rsuite";

export default function MainInput({
  inputType = "text",
  list = [],
  placeholder,
  state = {},
  name = "",
  setState = () => {},
  disabled = false,
}) {
  return (
    <div className={`inputContainer`}>
      {inputType === "select" ? (
        // <Select
        //   theme={(theme) => ({
        //     ...theme,
        //     borderRadius: 0,
        //     colors: {
        //       ...theme.colors,
        //       primary25: "#729DF1",
        //       primary: "#009daa",
        //     },
        //   })}
        //   classNamePrefix="select"
        //   className={"border border-[#E8E8E8] rounded-[57px] w-full py-1 px-2"}
        //   // isClearable={true}
        //   // defaultValue={currentValue}
        //   // value={currentValue}
        //   // inputValue !== undefined ? inputValue : state[name] || ""
        //   value={list?.find((item) => item.value === state[name])}
        //   isSearchable={true}
        //   name={name}
        //   options={list}
        //   placeholder={placeholder}
        //   onChange={(e) => {
        //     setState({
        //       ...state,
        //       [name]: e.value,
        //     });
        //   }}
        //   noOptionsMessage={() => "No Options"}
        //   // * the below 2 line of code to make the list of options appear above any other element
        //   // menuPortalTarget={document.body}
        //   // styles={selectStyles}

        //   styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        // />
        <VStack>
          <SelectPicker
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
        <DatePicker block placeholder={placeholder} oneTap value={state[name]} name={name} onChange={(e) => {
          setState({
            ...state,
            [name]: e,
          });
        }}/>
      ) : (
        <input
          type={inputType}
          onChange={(e) => {
            setState({
              ...state,
              [name]: e.target.value,
            });
          }}
          name={name}
          value={state[name]}
          className={"border border-[#E8E8E8] rounded-[57px] w-full p-2 main-input"}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
}
