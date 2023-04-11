import React from 'react';

function Header() {
  return (
    <div className="container header"> 
        <nav>
            <button>
                <img 
                src="images/logo.png" 
                width="50px" 
                alt="logo" 
                />
            </button>
            <p 
            className="navLeft"
            >                          
                LOG IN/REGISTER
            </p>
        </nav>    
    </div>
  )
}

export default Header;