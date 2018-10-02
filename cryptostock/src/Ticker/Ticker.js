
import React from 'react';
import './Ticker.css';
export default function Ticker({pair}){
    return (
        <div className="ticker">
            <p>{pair.toLowerCase()}</p>
            <p>12000</p>
        </div>
    )
}