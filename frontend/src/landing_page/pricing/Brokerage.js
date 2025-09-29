import React from "react";

function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5  text-center border-top">
        <div className="col-8 p-5 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
           <ul style={{ textAlign:"left",lineHeight:"1.8"}} className="text-muted">
             <li>
               Call & Trade and PMS auto-squareoff:Additional charges of Rs50 +
               GST per order.
             </li>
             <li>Digital contract notes will be sent via e-mail.</li>
             <li>Physical copies of contract notes, if required , shall be changed Rs 20 per contract notr. courier charges apply.</li>
             <li>For NRI account(non-PIS), 0.5% or RS100 per executed order for equity(whichever is lower).</li>
          <li>For NRI account (PIS),0.5% or Rs200 per executed order for equity(whichever is lower).</li>
          <li>if the account is in debit balance ,any order placed will be charged Rs40 per executed order instead of Rs 20 per executed order</li>
           </ul>

        </div>
        <div className="col-4 p-5 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
