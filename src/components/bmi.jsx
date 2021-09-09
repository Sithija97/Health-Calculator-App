import React from "react";
import FormGroup from "./formGroup.jsx";

const BMI = () => {
  const requiredParams = {
    height: true,
    weight: true,
  };
  return (
    <React.Fragment>
      <div className="bg-gray-100 h-screen">
        <div className="flex flex-wrap overflow-hidden px-20 py-20">
          <div className="w-full overflow-hidden bg-white">
            <FormGroup requiredParams={requiredParams} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BMI;
