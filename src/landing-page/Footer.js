import React from 'react';
import {Link} from 'react-router-dom';

//to write multiple lines of similar code at once hold down the Alt key and select each line that you want to code at once and then start typing
//replace a with link imported from react-routerdom.
function Footer() {
    return ( 
        <footer className='border-top' style={{backgroundColor:"#fbfbfb"}}>
            <div className='container mt-5 mb-3 '>
                <div className='row'>
                   
                <div className='col'>
                <b className="fs-1">TradeUp</b>
                <i class="fa-solid fa-arrow-trend-up fs-4"></i> <br></br>
                <p className='text-muted'> &copy; 2010 - 2024, TradeUp Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col'>
                    <h2> Company </h2><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>About</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Products</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Pricing</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Referral programme</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Careers</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Zerodha.tech</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Press & media</Link><br></br>
                    <Link to='#'className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Zerodha Cares (CSR)</Link><br></br>
                </div>
                <div className='col'>
                    <h2>Support</h2>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Contact us</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Support portal</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Z-Connect blog</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>List of charges</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Downloads & resources</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Videos</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Market overview</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>How to file a complaint?</Link><br></br>
                    <Link to='#' className='mb-5 fs-5 text-muted' style={{textDecoration:"none"}}>Status of your complaints</Link><br></br>
                </div>
                <div className='col'>
                    <h2>Account</h2>
                    <Link to='#' className='mb-3 fs-5 text-muted' style={{textDecoration:"none"}}>Open an account</Link><br></br>
                    <Link to='#' className='mb-3 fs-5 text-muted' style={{textDecoration:"none"}}>Fund transfer</Link>  <br></br>             
                </div>
                <div className='row mt-5 text-muted '>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#' style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href='#' style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on <a href='#' style={{textDecoration:"none"}}>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p><a href='#' style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | <a href='#' style={{textDecoration:"none"}}>Grievances Redressal Mechanism</a></p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#' style={{textDecoration:"none"}}>create a ticket here.</a></p>

                    <p className='text-center'>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>NSE</Link> 
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>BSE</Link> 
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>MCX </Link>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>Terms & conditions </Link>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>Policies & procedures </Link>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>Privacy policy </Link>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>Disclosure </Link>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>For investor's attention </Link>
                    <Link to="#" className='text-muted fs-5 mr-3 p-1' style={{textDecoration:"none"}}>Investor charter</Link>
                    </p>
                </div>
            </div>

            </div>
        </footer>
     );
}

export default Footer;