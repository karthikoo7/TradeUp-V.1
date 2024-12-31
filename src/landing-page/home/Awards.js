import React from 'react';

//svg is an image format that has image in the form of code, the benefit of using an svg image is that it never pixelates since it is made of code(numbers). 

function Awards() {
    return ( 
        <div className='container mt-5 fs-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    
                    <img src='media/largestBroker.svg' alt='largestbroker' style={{height:"100%"}}></img>
                </div>
                <div className='col-6 mb-5'>
                    <h1 className='mt-2'>Largest Stock Broker in India</h1>
                    <p>
                        2+ million clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    
                    <div className='row mt-5'>

                    <div className='col-6 mb-5'>
                            <ul>
                                <li className='mb-3'>Future & Options</li>
                                <li className='mb-3'>Commodity Deravatives</li>
                                <li className='mb-3'>Currency Deravatives</li>
                            </ul>
                    </div>

                    <div className='col-6 mb-5'>
                        <ul>
                                <li className='mb-3'>Stocks & IPOs</li>
                                <li className='mb-3'>Direct Mutual Funds</li>
                                <li className='mb-3'>Bonds & Govt. Securities</li>
                        </ul>
                    </div>
                    <img src='media/pressLogos.png' alt='presslogo'></img>
                    
                </div>
                    
                </div>
               

            </div>

        </div>
        );
    }
export default Awards;