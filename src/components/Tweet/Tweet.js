import React from "react";
import PropTypes from 'proptypes';
import './Tweet.css';

const Tweet = ({avatar, fullname, content, username, date}) => (
    <div className="tweet">
        <div className="avatar">
            <img src={avatar} role="presentation" alt="avatar"/>
        </div>
        <div className="data">
            <div className="info">
                <strong className="fullname">{fullname}</strong>
                <strong className="gray">@{username}</strong>
                <strong className="gray date">{date}</strong>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>

    </div>
);
Tweet.prototype = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Tweet;