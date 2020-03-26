import React, { FunctionComponent } from 'react';
import './card-list.styles.css'
import { CardListProperties } from './card-list.types';
import { Card } from '../card/card.component';

export const CardList: FunctionComponent<CardListProperties> = props => {
    return <div key='card-list' className='card-list'>
        {
            props.monsters.map(monster => <Card key={monster.id} monster={ monster } />)
        }
    </div>
}