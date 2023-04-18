import React from 'react';
import './Card.css';

const Card = (props: any) => {
    const {id, name, email} = props.data
    return (
        <div className="card">
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <div className="email">{email}</div>
        </div>
    )
}

export default Card;
