import React from 'react';

import './card.styles.css';

export const Card = (props) => (

    <div className = 'card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?gerald&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        <p className='address'><strong>Street:</strong> {props.monster.address.street}, <strong>Suite: </strong>{props.monster.address.suite}, 
        <strong>City:</strong> {props.monster.address.city},  <strong>Zipcode: </strong>{props.monster.address.zipcode},
        <strong>Geo: </strong><strong>Latitude: </strong>{props.monster.address.geo.lat},
        <strong>Longitude: </strong>{props.monster.address.geo.lng}.
                               
                               </p>
    </div>
) 