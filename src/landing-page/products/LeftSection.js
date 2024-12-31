import React from 'react';

function LeftSection({imageUrl, productName, productDescription, trydemo, learnmore, googleplay, appstore}) {
    return ( 
        <div className='container mt-5 mb-5 p-5'>
            <div className='row'>
                
            <div className='col-5'>
                <img src={imageUrl} alt='kite'></img>
            </div>
            <div className='col-2'></div>
            <div className='col-5 mb-5'>
                <h1>{productName}</h1>
                <p className='fs-4 text-muted mt-5' style={{lineHeight:"2em"}}>{productDescription}</p>
                <p className='mt-3 mb-4 fs-4'> <a href='#' style={{textDecoration:"none"}}>{trydemo} <i class="fa-solid fa-arrow-right"></i> </a> &nbsp;
                <a href='#' style={{textDecoration:"none"}}> {learnmore} <i class="fa-solid fa-arrow-right"></i></a></p>

                <p>
                    <img src={googleplay} alt='googleplay' style={{width:"40%"}}></img> &nbsp;
                    <img src={appstore} alt='app' style={{width:"38%"}}></img>
                    
                </p>

            </div>

            </div>
        </div>
     );
}

export default LeftSection;