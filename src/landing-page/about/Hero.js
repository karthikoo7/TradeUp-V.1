import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mb-5'>
                <h1>People</h1> 
            </div>

            <div className='row justify-content-center mb-5'>
                <div className='col-4 text-center'>
                    <img src='media/Hero.jpg' alt='Karthikeyan' style={{borderRadius:"100%", width:"60%"}}></img>

                    <h2 className='text-muted mt-3 mb-3 fs-4'>Karthikeyan Sharma</h2>
                    <h3 className='text-muted fs-5'>Web Developer</h3>
                    
                </div>
                <div className='col-6 fs-6'>
                <p className="fs-5 text-muted" style={{lineHeight:"2rem"}}> Karthikeyan Sharma is a talented Computer Science Engineering (CSE) student with a strong passion for web development. Specializing in the MERN stack—MongoDB, Express.js, React, and Node.js—he has gained expertise in building dynamic, scalable, and user-friendly web applications.  </p>


                <p className='fs-5 text-muted' style={{lineHeight:"2rem"}}>With a deep understanding of modern web technologies and a commitment to staying updated with the latest industry trends, Karthikeyan is dedicated to delivering innovative solutions in the ever-evolving field of web development.</p>

                <p className='fs-5 text-muted'>Connect on <a href='https://www.linkedin.com/in/karthikeyan-s-003028221/' style={{textDecoration:'none'}}>Linkedin</a>  / <a href='https://github.com/karthikoo7' style={{textDecoration:'none'}}>Github</a></p>

                </div>
            </div>
        </div>
     );
}

export default Hero;