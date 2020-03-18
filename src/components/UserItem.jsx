import React from 'react';

function UserItem(props) {
    const {name, email, salary, image, isGoldClient} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            <img src={image} width="100px" height="100px" alt='football'></img>
            <p>{ salary }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
        </div>
    );
}

export default UserItem;