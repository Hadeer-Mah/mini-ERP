import Select from "react-select/base";

export default function MainInput(
  inputType = "text",
  list = [],
  placeholder,
  state = {},
  name = "",
  setState = () => {},
  disabled = false
) {
    // console.log(inputType, list)
  return (
    <div className={`inputContainer`}>
      {inputType == "select" ? (
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
        ""
      ) : (
        inputType == "date" ? (
          ""
                  //   <DateInput
          //     data={state}
          //     setData={setState}
          //     placeholder={placeholder}
          //     name={name}
          //   />
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
            className={""}
            placeholder={placeholder}
            disabled={disabled}
          />
        )
      )}
    </div>
  );
}
