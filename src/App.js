import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            background: 'white',
            textColor: 'black',
            users: [],
            posts:[]
            // 'https://i1.pngguru.com/preview/695/17/95/pes-2012-beckham-png-clipart.jpg'
            // 'https://img.pngio.com/hd-david-beckham-render-soccer-player-transparent-png-image-david-beckham-png-2700_2716.png'

        };
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/rscutaru/Curs-React-Proiect1/users')
            .then(response => response.json())
            .then(data => {
                data.filter(user => user.id < 4);
                data.forEach(user => {
                    user.isGoldClient = false;
                });
                this.setState({ users: data });
            });
        fetch('https://my-json-server.typicode.com/rscutaru/Curs-React-Proiect1/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data});
            });
    }

    changeColor(event) {
        this.setState({ background: event.target.value });
    }

    changeTextColor(event) {
        console.log(event.target.value);
        this.setState({ textColor: event.target.value });
    }

    getMaxId(users) {
        let maxId = 0;

        users.forEach(user => {
            if (user.id > maxId) {
                maxId = user.id;
            }
        });

        return maxId;
    }

    submitAddForm(event, name, email, salary, image, isGoldClient) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                users: [
                    ...prevState.users,
                    {
                        id: this.getMaxId(prevState.users) + 1,
                        name,
                        email,
                        salary,
                        image,
                        isGoldClient
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="app" style={{ background: this.state.background, color: this.state.textColor }}>
                <h1>Admin panel - Proiectul 1</h1 >
                <UserAddForm submitAddForm={(event, name, email, salary, image, isGoldClient) => this.submitAddForm(event, name, email, salary, image, isGoldClient)} />
                <UserList users={this.state.users} />
                <PostList posts={this.state.posts}/>
                <input type="color" onChange={(event) => this.changeColor(event)} />
                <input type="color" onChange={(event) => this.changeTextColor(event)} />
            </div>
        );
    }
}

export default App;
