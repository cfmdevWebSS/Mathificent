import React from "react";
function SelectInput({ label, id, value, currentValue, setCurrentValue }) {
  const values = value;
  const selectOptions = values.map((value) => (
    <option value={value} key={value.toString()}>
      {value}
    </option>
  ));

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      >
        {selectOptions}
      </select>
    </div>
  );
}

export default SelectInput;
