import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            <div className='row text-center p-5'>
                <h1> Charges </h1>
                <p className='text-muted mt-2 fs-4'>List of all taxes and charges </p>
                
                <div className='col p-3 fs-3'>  <img src='media\pricing-eq.svg' alt='pricing'></img>Free Equity Delivery
                <p className='fs-5 text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free <br/> — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-3 fs-3'>  <img src='media\other-trades.svg' alt='pricing3'></img>Intraday and F&O Trades
                <p className='fs-5 text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col p-3 fs-3'> <img src='media\pricing-eq.svg' alt='pricing2'></img>Free direct MF
                <p className='fs-5 text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges3</p> 
                </div>

                <h1 className='p-5'><a href='#' style={{textDecoration:"none"}}>Calculate your costs</a> upfront using our brokerage calculator</h1>
                
            </div>
        </div>
     );
}

export default Hero;