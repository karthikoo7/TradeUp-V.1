import React from 'react';

function Education() {
    return ( 
        
        <div className='container mt-5 mb-5 p-5'>
            <div className='row'>

                <div className='col-6'>
                    <img src='media\education.svg' alt='education'></img>
                </div>

                <div className='col-6 p-5 fs-5'>

                    <h1 className='mt-3 fs-2 mb-3'> Free and open market eduation</h1>
                    <p className='text-muted'>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' style={{textDecoration:"none"}}> Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p className='text-muted mt-4'>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' style={{textDecoration:"none"}}> Trading Q&A  &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
     );
}

export default Education
