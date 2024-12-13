import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {

  const [isDisabled,setDisable] = useState(false);
  const [message,setMessage] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
    const result=await token.payOut();
    setMessage(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAsh tokens here! Claim 10,000 DASH token to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {message}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
