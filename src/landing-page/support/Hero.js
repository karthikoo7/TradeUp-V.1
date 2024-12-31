import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid mt-5 mb-5' id='supportHero'>
            
            <div className='p-3 m-3' id='supportWrapper'>
            <h3>Support Portal</h3>
            <a href=''>Track Tickets</a>
            </div>
            
            <div className='row p-5'>
            <div className=' col-6 p-3'>
                <h3>
                Search for an answer or browse help topics to create a ticket
                </h3>
                <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'></input>
                <a href=''>Track account opening</a> &nbsp; 
                <a href=''>Track segment activation</a> &nbsp; 
                <a href=''>Intraday margins</a> &nbsp; 
                <a href=''>Kite user manual</a>&nbsp; 
            </div>

            <div className='col-6 p-5'>
                <h3>Featured</h3>
                <ol>
                    <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                    <li><a href=''>Surveillance measure on scrips - December 2024</a></li>
                </ol>

            </div>

            </div>


        </section>
     );
}

export default Hero;