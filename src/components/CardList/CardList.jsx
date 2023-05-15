import React from 'react';
import Card from '../Card/Card'

function CardList({clients}) {
  return (
    <>
      <div className='card-container'>
          {clients.map((client) => (
            <div key={client.id + Math.random()}>
              <Card client={client}/>
            </div>
          ))}
        </div>
    </>
  );
}

export default CardList;