import React from "react";

import './Tweet.css';

const Tweet = ({avatar, fullname, content}) => (
    <div className="tweet">
        <div className="avatar">
            <img src={avatar} role="presentation"/>
        </div>
        <div className="data">
            <div className="info">
                <strong>{fullname}</strong>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>

    </div>
);

export default Tweet;