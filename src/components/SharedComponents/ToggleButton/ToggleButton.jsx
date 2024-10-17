import "./ToggleButton.scss"
export default function ToggleButton({checked, onChange}) {
    return (
      <div>
        <label>
          <input
            className="toggle-checkbox"
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <div className="toggle-switch"></div>
        </label>
      </div>
    );
  }
