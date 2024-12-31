import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5 fs-5 '> 
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero img' className='mb-5'></img>

                <h1> Invest in Everything </h1>
                <p className='mt-2 mb-4'>
                    Online Platform to invest in stocks, derivatives, mutual funds, and more...
                </p>
                <button className='btn btn-primary p-2 mb-5 fs-5' style={{width:"20%" , margin:"auto"}}>Sign Up Now</button>
            </div>


        </div>
     );
}

export default Hero;