import './Words.css';
import React from 'react';


const Words = (props) => (
    <li>Słowo po angielsku: <strong>{props.english}</strong>
    <br />
    Tłumaczenie: <strong>{props.polish}</strong></li>
)



export default Words

