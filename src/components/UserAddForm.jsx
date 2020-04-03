import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            salary: '',
            image: '',
            isGoldClient: false,
            errors:''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSalary(event) {
        this.setState({salary: event.target.value});
    }

    updateImage(event) {
        this.setState({image: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    validateName(event){
        console.log(event.target.value);
        const name= event.target.value;
        let semaphore = false;
        for( let i=0; i<name.length; i++){
            if ( this.isLetter(name[i]) === false) {
                semaphore = true;
            }}
        if (semaphore === true){
             console.log('ERROR');
        }
    }

    isLetter (char) {
        if ((char>'Z' && char <'a') || 
        char >'z' || 
        char <'A'){
            return false;
        } else  {
            return true;
        }
    } 

    isEmailSpecific (char) {
        if(char==='@'|| char ==='.'){
            return true;
        } else{
            return false;
        }
    }
    validateEmail(event){
        const email= event.target.value;
        console.log(email);
        let semaphore = false;
        for (let i=0; i<email.length; i++){
            if (this.isLetter(email[i]) === false && this.isEmailSpecific(email[i]) === false) {
                semaphore =true;
            }}
        if (semaphore === true){
         console.log('ERROR');
        }
    }

    // validateSalary (event){
    //     const salary = event.target.value;
    //     console.log(salary);
    //     let semaphore = true;
    //     for (let i= 0;i<salary.length; i++){
    //         if (salary[i]<=0 &&
    //             salary.indexOf['.'] ==-1 ) {

    //             }
    //     } else {semaphore = true}

    //     if (semaphore == false){
    //         console.log('ERROR');
    //        }
    // }




    render() {
        const {name, email, salary, image, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, salary, image, isGoldClient)}
            >
                <h2>Adauga utilizatori:</h2> 
                <label htmlFor="name">Nume:</label>
                <input 
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                    onBlur={(event)=>this.validateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                    onBlur={(event)=>this.validateEmail(event)}
                />

                <label htmlFor="salary">Salary:</label>
                <input 
                    type="text"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                    // onBlur={(event)=>this.validateSalary(event)}
                />

                <label htmlFor="image">Image:</label>
                <input 
                    type="text"
                    name="image"
                    onChange={(event) => this.updateImage(event)}
                />

                <label htmlFor="is-gold-client">Client GOLD</label>
                <input 
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input className="input-data"
                    type="submit" 
                    value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;