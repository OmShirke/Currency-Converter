import "./App.css";
import React, { useEffect, useState } from "react";
import CurrencyRows from "./CurrencyRows";

const BASE_URL = `https://v6.exchangerate-api.com/v6/6cbbba97b763887effc4b36c/latest/USD`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.conversion_rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.conversion_rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRows
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      />
      <div className="equals">=</div>
      <CurrencyRows
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
      />
    </>
  );
}

export default App;
