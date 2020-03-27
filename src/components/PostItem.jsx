import React from 'react';

function PostItem(props) {
    const {userId, id, title, body} = props;

    return (
        <div>
            <h3>{ userId }</h3>
            <p>{ id }</p>
            <p>{ title }</p>
            <p>{ body }</p>
            </div>
    );
}

export default PostItem;