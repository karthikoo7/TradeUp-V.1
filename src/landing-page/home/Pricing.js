import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5'>

                    <h1 className=' mt-3'> Unbeatable pricing</h1>
                    <p className='mt-3 p-1 fs-4 text-muted'>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' style={{textDecoration:"none"}}>See Pricing &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7'>
                <div className='row text-center text-muted p-2'>
                    <div className='col'>  <img src='media\pricing-eq.svg' alt='pricing'></img>Free account opening</div>
                    <div className='col'> <img src='media\pricing-eq.svg' alt='pricing2'></img>Free equity delivery and mutual funds</div>
                    <div className='col'>  <img src='media\other-trades.svg' alt='pricing3'></img>Intraday and F&O</div>
                </div>

                </div>
               


            </div>
        </div>
     );
}

export default Pricing;