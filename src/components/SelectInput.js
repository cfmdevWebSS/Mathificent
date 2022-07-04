import React from "react";
function SelectInput({ label, id, value, currentValue, setCurrentValue }) {
  const values = value;
  const selectOptions = values.map((value) => (
    <option value={value[1]} key={value[0].toString()}>
      {value[0]}
    </option>
  ));

  return (
    <div>
      <label htmlFor={id} className="col font-weith-bold">
        {label}
      </label>
      <select
        id={id}
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        className="col form-control"
      >
        {selectOptions}
      </select>
    </div>
  );
}

export default SelectInput;
