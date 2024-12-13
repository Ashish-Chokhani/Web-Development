import React, { useState } from "react";
import { token } from "../../../declarations/token";
import {Principal} from "@dfinity/principal";

function Transfer() {

  const [receipientId,setReceipientId] = useState("");
  const [amount,setAmount] = useState("");
  const [isDisabled,setDisable]= useState(false);
  const [message,setMessage] = useState("");
  const [isHidden,setHidden] = useState(true);
  
  async function handleClick() {
    setDisable(true);
    setHidden(true);
    let recipient = Principal.fromText(receipientId);
    let recipientAmount = Number(amount);
    const result= await token.transfer(recipient,recipientAmount);
    setMessage(result);
    setDisable(false);
    setHidden(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={receipientId}
                onChange={(event)=>setReceipientId(event.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{message}</p>
      </div>
    </div>
  );
}

export default Transfer;
