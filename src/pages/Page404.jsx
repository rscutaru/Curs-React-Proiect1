import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Page404 extends Component {
    render() {
        return (
            <div>
               <p>Page404</p>
               <Link to = '/'>Home</Link> 
            </div>
        )
    }
}

export default Page404;
