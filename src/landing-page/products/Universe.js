import React from 'react';

function Universe() {
    return (
        <> 
        <h1 className='text-center mt-5 mb-5 p-5'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}> TradeUp.tech</a> blog.</h1>
    
        <div className='container text-center'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='fs-4 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mt-5'>
                <div className='col-4 p-5'>
                    <img src='/media/zerodhaFundhouse.png' style={{width:"80%"}} alt='img'></img>
                    <p className='fs-5 text-muted mt-4'>Our asset management venture <br/> that is creating simple and transparent index
                    funds to help you save  four your goals.</p>
                </div>
                <div className='col-4 p-5 '>
                    <img src='/media/sensibullLogo.svg' style={{width:"80%"}} alt='img'></img>
                    <p className='fs-5 text-muted mt-5'>Options trading platforms that lets you <br/> create strategies, analyze positions, and examin
                    data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/smallcaseLogo.png' style={{width:"80%"}} alt='img'></img>
                    <p className='fs-5 text-muted mt-4'>Thematic investing platform  that helps you invest in diversified  baskets  on ETFs.</p>
                </div>
                
            </div>
            <div className='row'>
                <div className='col-4 p-5'>
                    <img src='/media/streakLogo.png' style={{width:"50%"}} alt='img'></img>
                    <p className='fs-5 text-muted mt-4'>Systematic trading platform that allows  you to create  and backtest  strategies without coding.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/tijori.svg' style={{width:"50%"}} alt='img'></img>
                    <p className='fs-5 text-muted mt-3'>Investment research platform that offers detailed insights on stocks, sectors, and supply chains, and more.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/dittoLogo.png' style={{width:"40%"}} alt='img'></img>
                    <p className='fs-5 text-muted mt-4'>Personalised advice on life and health insurance. No spam and mis-selling.</p>
                </div>
                
            </div>
            <button className='btn btn-primary p-2 mb-5 fs-2' style={{width:"25%" , height:'8vh', margin:"auto"}}>Sign Up for free</button>
        </div>
    
    
        </>
    );
}

export default Universe;