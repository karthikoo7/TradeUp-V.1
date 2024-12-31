import React from 'react';


function NotFoundPage() {
    return ( 
        <div className='container text-center'>
            <h1><b> 404 : Page Not Found</b> </h1>
            <p className='fs-3 text-muted' > Please enter a valid link or return to <a href='/' style={{textDecoration:'none'}} > Homepage</a></p>
        </div>
     );
}

export default NotFoundPage;