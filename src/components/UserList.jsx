import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;

    return (
        <div className="container">
            <h2>Lista utilizatorilor:</h2>
                <div className="row">
            { users.map((user, index) => {
                return (
                    <div className="col-6">
                            <UserItem 
                                id={ user.id }
                                name={ user.name }
                                email={ user.email }
                                isGoldClient={ user.isGoldClient }
                                salary ={user.salary}
                                image={ user.image}
                                key={ index }                    
                                />
                            <button className="deleteUser" onClick ={(event)=>props.deleteUserCallBack(event,user.id)}>Sterge utilizatorul:</button>
                        </div>    
                    )
                })} 
                </div>
        </div>
    );
}

export default UserList;