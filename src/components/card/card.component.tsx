import React, { FunctionComponent } from 'react';
import { CardProperties } from './card.types';
import './card.styles.css';

export const Card: FunctionComponent<CardProperties> = cardProperties => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${cardProperties.monster.id}?set=set2&size=180x180`} />
        <h2 key={cardProperties.monster.id}> {cardProperties.monster.name} </h2>
        <p>{ cardProperties.monster.email }</p>
    </div>
)