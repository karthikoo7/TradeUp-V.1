import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 p-5 border-bottom mb-5'>
            <div className='row text-center'>
                <h1 className='fs-0 fw-bold'> TradeUp Products </h1>
                <p className='fs-2 text-muted mt-3'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-4 text-muted mt-1'> Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;