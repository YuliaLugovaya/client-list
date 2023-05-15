import React from 'react';

function Card({client}) {
  return (
    <>
      <div className="card" >
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{client.name}<i className="material-icons right">more_vert</i></span>
          <p><a className='card-link' href={client.website}>{client.website}</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
          <p><span className='card-text'>Username:</span> {client.username}</p>
          <p><span className='card-text'>City:</span> {client.address.city}</p>
          <p><span className='card-text'>Company:</span> {client.company.name}</p>
          <p><span className='card-text'>Email:</span> {client.email}</p>
          <p><span className='card-text'>Phone:</span> {client.phone}</p>
        </div>
      </div>
    </>
  );
}

export default Card;