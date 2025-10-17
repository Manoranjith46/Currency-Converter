import axios from 'axios';
import './App.css'



function App() {
  const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY || '';

  function HandleConvert(){
    const amt = document.querySelector(".input").value;
    const fromCurrency = document.querySelector(".currencyfrom").value;
    const toCurrency = document.querySelector(".currencyto").value;
    let result = document.querySelector(".amount");
    result.innerText = "Loading...";

    axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
    .then((response) => {
      const convertedAmount = (amt * response.data.conversion_rates[toCurrency]).toFixed(2);
      result.innerText = convertedAmount;
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
    });

  }


  return (
    <>
      <div className="div">
        <div className="converter">
          <h1>Currency Converter</h1>
            <div className="box">
              <label htmlFor="amount">Enter Amount : </label>
              <input className="input" type="number" name="amount" />
              <br />
              <label htmlFor="currencyfrom">Select Currency From : </label>
              <select name="currencyfrom" className="currencyfrom">
                <option value="INR">India</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="JPY">Japanese Yen</option>
              </select>
              <br />
              <label htmlFor="currencyto">Select Currency To : </label>
              <select name="currencyto" className="currencyto">
                <option value="INR">India</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="JPY">Japanese Yen</option>
              </select>
              <br />
              <button className="btn  " onClick={HandleConvert}>Convert</button>
              <br />
              <h3 className="result">Converted Amount : <span className="amount"></span></h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
