import React from "react";
import DropDown from "../components/Dropdown";
import { useState } from "react";

function DropDownPage() {
  const [Selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { lable: "Red", value: "red" },
    { lable: "Green", value: "green" },
    { lable: "Blue", value: "blue" },
  ];

  return (
    <DropDown options={options} value={Selection} onChange={handleSelect} />
  );
}

export default DropDownPage;
