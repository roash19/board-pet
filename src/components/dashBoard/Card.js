import React from 'react';
import Avatar from "../Avatar";

const Card = (props) => {
    const { text, priority } = props;

    return (
        <div className="card">
            <div className={`card-priority card-priority_${priority}`}>
                <p>{`${priority} Priority`}</p>
            </div>
            <p className="card__text text-default">
                {text}
            </p>
            <Avatar/>
        </div>
    );
};

export default Card;