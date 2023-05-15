import React from 'react';

function Header({ addClients }) {
  return (
    <>
      <header>
        <nav className='nav-container'>
          <div className="nav-wrapper">
            <h1 className='title'>Client list</h1>
            <button
              className="waves-effect waves-light btn"
              onClick={() => addClients()}>
              Show more clients
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;