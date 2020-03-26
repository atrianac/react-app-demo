import React, { FunctionComponent } from 'react';
import './search-box.styles.css';
import { SearchBoxProperties } from './search-box.types';

export const SearchBox: FunctionComponent<SearchBoxProperties> = (props) => {
    return (<input type='search' placeholder={props.placeholder} onChange={props.handleEvent} className='search' />);
}