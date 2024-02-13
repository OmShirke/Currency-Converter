import React from "react";

const CurrencyRows = ({
  value,
  setValue,
  currency,
  setCurrency,
  setFrontConversion,
  conversionValue,
  options,
}) => {
  // jsx
  return (
    <article>
      {/* input */}
      <div className="form-row">
        <input
          type="number"
          className="form-input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setFrontConversion(conversionValue);
          }}
        />
      </div>

      {/* select-box */}
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </article>
  );
};

export default CurrencyRows;
