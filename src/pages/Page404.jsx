import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
    render() {
        return (
            <div>
               <p>Page404</p>
               <img src='http://clipart-library.com/images/AibKj47BT.jpg' alt='sad face' width="250px"/>
               <br/>
               <br/>
               <br/>
               <Link to = '/'>Home</Link> 
            </div>
        )
    }
}

export default Page404;
