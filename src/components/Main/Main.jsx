import React from 'react';
import CardList from '../CardList/CardList'

function Main({clients}) {

  return (
    <>
      <div className='main'>
        <CardList clients={clients}/>
      </div>
    </>
  );
}

export default Main;