import React from 'react';
import M from 'materialize-css';

function Header(props) {
  document?.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
    console.log(instances);
  })
  return (
    <>
      <header>
        <nav>
          <div className="nav-wrapper">
            <h1 className='title'>Список клиентов</h1>
            <button className="waves-effect waves-light btn">Показать больше</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;