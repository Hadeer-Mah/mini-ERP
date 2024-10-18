import "./ToggleButton.scss"
export default function ToggleButton({isActive, state, setState, name, disabled = false}) {
    return (
      <div>
        <label htmlFor="activation">
          <input
          id="activation"
            className="toggle-checkbox"
            type="checkbox"
            checked={JSON.parse(isActive)}
            onChange={(e)=>{
              setState({
                ...state,
                [name]: e.target.checked
              })
            }}
            disabled={disabled}
          />
          <div className="toggle-switch"></div>
        </label>
      </div>
    );
  }
