import React from "react";

export default function CurrencyRows(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
  return (
    <div>
      <input type="number" className="input" />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
