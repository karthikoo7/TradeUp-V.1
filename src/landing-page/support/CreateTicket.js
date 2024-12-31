import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <h2 className='text-muted'>To create a ticket, select a relevant topic</h2>
            <div className='row'>
                
                <div className='col-4 mt-5'>
                    <h4 className='mb-3 '><i class="fa-solid fa-circle-plus fa-sm"> &nbsp;</i>Account Opening</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Getting started</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Online</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Offline</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Charges</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Company, Partnership and HUF</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Non Resident Indian (NRI)</a><br/>
                </div>
                
                <div className='col-4 mt-5'>
                    <h4 className='mb-3'> <i class="fa-regular fa-user"></i>&nbsp;Your Zerodha Account</h4>
                    <a href="" style={{textDecoration:"none",lineHeight:"2em"}}>Login credentials</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Your Profile</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Account modification and segment addition</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>CMR & DP ID</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Nomination</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Transfer and conversion of shares</a><br/>
                </div>
                <div className='col-4 mt-5'>
                <h4 className='mb-3'><i class="fa-solid fa-lines-leaning"></i>&nbsp; Trading and Markets</h4>
                    <a href="" style={{textDecoration:"none",lineHeight:"2em"}}>Trading FAQs</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Kite</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Margins</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Product and order types</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Corporate actions</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Kite features</a><br/>
                </div>
            </div>

            <div className='row mb-5'>
                
                <div className='col-4 mt-5'>
                    <h4 className='mb-3 '><i class="fa-regular fa-credit-card"></i> &nbsp;Funds</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Fund withdrawal</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Adding funds</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Adding bank accounts</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>eMandates</a><br/>
                   
                </div>
                
                <div className='col-4 mt-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-terminal"></i>&nbsp; Console</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2em"}}>IPO</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2em"}}>Portfolio</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2em"}}>Funds statement</a><br/> 
                    <a href='' style={{textDecoration:"none", lineHeight:"2em"}}>Profile</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2em"}}>Reports</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2em"}}>Referral program</a><br/>
                </div>
                <div className='col-4 mt-5'>
                <h4 className='mb-3'><i class="fa-solid fa-coins"></i>&nbsp;Coin</h4>
                    <a href="" style={{textDecoration:"none",lineHeight:"2em"}}>Understanding mutual funds and Coin</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Coin app</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Coin web</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>Transactions and reports</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2em"}}>National Pension Scheme (NPS)</a><br/>
                </div>
            </div>

          
        </div>
     );
}

export default CreateTicket;