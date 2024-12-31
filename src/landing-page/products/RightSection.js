import React from 'react';

function RightSection({imageurl, productName, productDescription, learnmore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 mt-5 mb-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='fs-4 text-muted mt-5' style={{lineHeight:"2em"}}>{productDescription}</p>
                    <p className='mt-3 mb-4 fs-4'><a href='#' style={{textDecoration:"none"}}>{learnmore} &nbsp;<i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
                <div className='col-2'></div>
                <div className='col-5'>
                <img src={imageurl} alt='rightImg'></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;