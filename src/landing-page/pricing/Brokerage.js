import React from 'react';

function Brokerage() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <h1>Charges explained</h1>

                <div className='col-6 p-4 mb-5'>


                    <h3 className='text-muted mt-5 mb-3'>Securities/Commodities transaction tax</h3>   
                    <p className='text-muted fs-5'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

                    <br/> <br/>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>


                    
                    <h3 className='text-muted mt-5 mb-3'>Transaction/Turnover Charges</h3>   
                    <p className='text-muted fs-5'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

                    <br/> <br/>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

                    <br/> <br/>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

                    <br/> <br/>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

                    <br/> <br/>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                    <h3 className='text-muted mt-5 mb-3'>Call & trade</h3>   
                    <p className='text-muted fs-5'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                    <h3 className='text-muted mt-5 mb-3'>Stamp charges</h3>
                    <p className='text-muted fs-5'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h3 className='text-muted mt-5 mb-3'>NRI brokerage charges</h3> 
                    <ul className='text-muted fs-5'>
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>

                    <h3 className='text-muted mt-5 mb-3'>Account with debit balance</h3>
                    <p className='text-muted fs-5'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                </div>

                <div className='col-6 p-4'>

                <h3 className='text-muted mt-5 mb-3'>GST</h3>   
                <p className='text-muted fs-5'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                <h3 className='text-muted mt-5 mb-3'>SEBI Charges</h3>   
                    <p className='text-muted fs-5'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                <h3 className='text-muted mt-5 mb-3'>DP (Depository participant) charges</h3>   
                <p className='text-muted fs-5'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.

                <br/><br/>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

                <br/><br/>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                
                <h3 className='text-muted mt-5 mb-3'>Pledging charges</h3>   
                    <p className='text-muted fs-5'>₹30 + GST per pledge request per ISIN.</p>    
                
                    <h3 className='text-muted mt-5 mb-3'>AMC (Account maintenance charges)</h3>   
                    <p className='text-muted fs-5'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here

                    <br/><br/>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>


                    <h3 className='text-muted mt-5 mb-3'>Corporate action order charges</h3>   
                    <p className='text-muted fs-5'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>


                    <h3 className='text-muted mt-5 mb-3'>Off-market transfer charges</h3>   
                    <p className='text-muted fs-5'>₹25 per transaction.</p>


                    <h3 className='text-muted mt-5 mb-3'>Delayed Payment Charges</h3>   
                    <p className='text-muted fs-5'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</p>

                </div>

                <h4 className='text-muted'>Disclaimer</h4>
                <p className='text-muted mt-3'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>

            </div>

            <div className='row mt-5'>
                <h1>Charges for account opening</h1>

                <table className=' table mt-5 mb-5 border fs-4 '>
                    <tr>
                        <td className='p-3 border'>Types of Account</td>
                        <td className='p-3 border'>Charges</td>
                    </tr>
                    <tr>
                        <td className='p-3 border text-muted'>Online account</td>
                        <td className='p-3 border'><button type="button" class="btn btn-success" disabled >Free</button></td>
                    </tr>
                    <tr>
                        <td className='p-3 border text-muted'>Offline account</td>
                        <td className='p-3 border'><button type="button" class="btn btn-success" disabled >Free</button></td>
                    </tr>
                    <tr>
                        <td className='p-3 border text-muted'>NRI account (offline only)</td>
                        <td className='p-3 border text-muted'>₹ 500</td>
                    </tr>
                    <tr>
                        <td className='p-3 border text-muted'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td className='p-3 border text-muted'>₹ 500</td>
                    </tr>
                    
                </table>
            </div>
        </div>
     );
}

export default Brokerage;