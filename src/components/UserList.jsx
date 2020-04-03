import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;

    return (
        <div >
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                return (
                <div className="userList">
                    <UserItem className="userItem"
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
    );
}

export default UserList;