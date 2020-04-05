import React from 'react';
import { Link } from 'react-router-dom';
import  './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h3>About</h3>
                <p> 
                    I am Roxana, an aspiring Front-End Developer. <br/>
                    This is my very first project written in Java Script, using the React framework. <br/>
                    <br/>
                </p>
                    The scope of this project cosisted of: <br/>
                <ol>
                    <li> Adding a <strong>user form</strong> with the following criteria to be filed in: first name, surname, image, salary, and the checkbox option of a gold client or not;</li>
                    <li> Display a <strong>user list</strong>: the users are added in a list and each user has a delete button created in order to delete them from the respective list;</li>
                    <li> Display <strong>users posts</strong>: there is also an option to display the posts of the users;</li>
                    <li> Adding a <strong>button for changing the background colour</strong>;</li>
                    <li> Adding a <strong>button for changing the font colour</strong>; </li>                      
                </ol>
                <Link to ='/' >Home</Link>
            </div>
        )
    }
}

export default About;
