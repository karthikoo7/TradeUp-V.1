import React from 'react';

function Stats() {
    return ( 
        
    <div className='container mt-5 p-5 mb-5'>

        <div className='row'>

            <div className='col-6 '>

                <h1>Trust with confidence</h1>

                <h2 className='fs-2 mt-5'>Customer-first always</h2>
                <p className='fs-4 text-muted'>
                That's why 1.5+ crore customers trust TradeUp with ₹4.5+ 
                lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                </p>

                <h2 className='fs-2 mt-2'>No spam or gimmicks</h2>
                <p className='fs-4 text-muted' >
                No gimmicks, spam, "gamification", or annoying push notifications. 
                High quality apps that you use at your pace, the way you like.
                </p>

                <h2 className='fs-2 mt-2'>The TradeUp universe</h2>
                <p className='fs-4 text-muted'>
                Not just an app, but a whole ecosystem. Our investments in 
                30+ fintech startups offer you tailored services specific to your needs.
                </p>

                <h2 className='fs-2 mt-2'>Do better with money</h2>
                <p className='fs-4 text-muted'>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                but actively help you do better with your money.
                </p>
            </div>
            
            <div className='col-6 text-center mt-5'>
            
            <img src='media/ecosystem.png' alt='ecosystem image' style={{width:"100%", height:"100%vh"}}></img>

            <a href='#' style={{textDecoration:"none", marginRight:" 5rem"}}> Explore our products! <i class="fa-solid fa-arrow-right"></i></a>
            <a href='#' style={{textDecoration:"none"}}> Try Kite demo! <i class="fa-solid fa-arrow-right"></i></a>

            </div>

        </div>

            

    </div>


     );
}

export default Stats;