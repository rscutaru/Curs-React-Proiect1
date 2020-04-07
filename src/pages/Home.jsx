import React from 'react';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import PostList from '../components/PostList';
import './Home.css';
import { Link } from 'react-router-dom';



class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            background: "edf2ef",
            textColor: 'black',
            users: [],
            posts:[],
            // 'https://i1.pngguru.com/preview/695/17/95/pes-2012-beckham-png-clipart.jpg'
            // 'https://img.pngio.com/hd-david-beckham-render-soccer-player-transparent-png-image-david-beckham-png-2700_2716.png'
            showUsers: true,
            showPosts: false
        };
        this.clickedUsers=this.clickedUsers.bind(this);
        this.clickedPosts=this.clickedPosts.bind(this);
    }

    componentDidMount() {
        Promise.all([fetch('https://my-json-server.typicode.com/rscutaru/Curs-React-Proiect1/users'), fetch('https://my-json-server.typicode.com/rscutaru/Curs-React-Proiect1/posts')])
               .then(([usersFetched,postsFetched])=>{
                    return Promise.all([usersFetched.json(),postsFetched.json()])
               })

             .then(([usersFetched,postsFetched])=>{
                usersFetched.filter(user => user.id < 4);
                usersFetched.forEach(user => {
                    user.isGoldClient = false;
                });
                this.setState({ users: usersFetched });
                this.setState({posts: postsFetched});
             });
    }

    // componentDidUpdate(){
    //     Promise.all([fetch('https://my-json-server.typicode.com/rscutaru/Curs-React-Proiect1/users'), 
    //                 fetch('https://my-json-server.typicode.com/rscutaru/Curs-React-Proiect1/posts')])
    //            .then(([usersFetched,postsFetched])=>{
    //                 return Promise.all([usersFetched.json(),postsFetched.json()])
    //            })

    //          .then(([usersFetched,postsFetched])=>{
    //             usersFetched.filter(user => user.id < 4);
    //             usersFetched.forEach(user => {
    //                 user.isGoldClient = false;
    //             });
    //             this.setState({ users: usersFetched });
    //             this.setState({posts: postsFetched});
    //          });
    // }

    changeColor(event) {
        this.setState({ background: event.target.value });
    }

    changeTextColor(event) {
        console.log(event.target.value);
        this.setState({ textColor: event.target.value });
    }

    clickedUsers(event) {
        event.preventDefault()
        this.setState({
           showUsers : !this.state.showUsers
        });
    }

    clickedPosts(event) {
        event.preventDefault()
        this.setState({
           showPosts : !this.state.showPosts
        });
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

    deleteUser(event, user_id){
        event.preventDefault();
       const filteredUsers = this.state.users.filter(user=> user.id !== user_id);
       this.setState({users: filteredUsers});
    }

    render() {
        const {showUsers, showPosts} = this.state;

        return (
            <div className="app container" style={{ background: this.state.background, color: this.state.textColor }}>
                <h1>Proiectul 1</h1 >
                <UserAddForm submitAddForm={(event, name, email, salary, image, isGoldClient) => this.submitAddForm(event, name, email, salary, image, isGoldClient)} />
                {showUsers===true
                    ? <UserList users={this.state.users} deleteUserCallBack={(event,user_id) => this.deleteUser(event, user_id)} />
                    :null
                }
                {showPosts===true
                    ?<PostList posts={this.state.posts}/>
                    :null}
                    
                <div>
                    <div className='row'>
                        <button className ="showUsers col-6" onClick= {this.clickedUsers}>Afiseaza useri:</button>
                        <button className ="showPosts col-6" onClick ={ this.clickedPosts}>Afiseaza postari:</button>
                        <input className="col-6" type="color" onChange={(event) => this.changeColor(event)} />
                        <input className="col-6" type="color" onChange={(event) => this.changeTextColor(event)} />                  
                    </div>
                    <footer>
                        <Link to='/about' > About </ Link >
                    </footer>
                </div>
                
               
            </div>
        );
    }


    
}

export default Home;