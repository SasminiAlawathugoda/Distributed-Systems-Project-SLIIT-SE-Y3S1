/*Usersignup component is rendered when the user(customer) clicks the Register button in usersignup page*/
/*User(customer) can create a user account by pressing the Register button*/

import React,{Component} from 'react';
import '../App.css';
import '../App';
import LoginP from './userlogin';
import ReactDOM from "react-dom";


class Usersignup extends Component{ /* Usersignup class extends component*/
    constructor(props){
        super(props);
    }

    /*When the Register button in the usersignup page is clicked, Usersignup method will be called.*/
    /*Usersignup method is used to create a new account for a user(to register user)*/

    usersignup(){
        const username=this.refs.username.value;
        const useraddress=this.refs.useraddress.value;
        const email=this.refs.email.value;
        const password=this.refs.password.value;
        const confpassword=this.refs.confpassword.value;

        /*Alert will be displayed if any of these fields are empty*/

        if(username==''||useraddress==''||email==''||password==''||confpassword==''){
            alert('Error! One or more fields are empty.Please enter details for all the fields'); //Display alert
        }
        else{
            //In here checks whether entered email is already in use or not.
            var emailFound=false;
            fetch('http://localhost:3000/users/' + email, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(rdata => {
                var users = JSON.stringify(rdata);
                console.log(users);
                if (users != '[]') { //If the email is entered previously

                    alert('Your entered email is already in use.Please enter another Email'); //Display alert
                }
                else{
                    //If the email address you entered is not used previously,user will be registered by using that email address.
                      //Login page will be displayed to the User(customer) after pressing the register button.

                    var rdata={"name":username,"useraddress":useraddress,"email":email,"password":password};
                        console.log(rdata);
                        fetch('http://localhost:3000/users/', {
                            method: 'POST',
                            body:JSON.stringify(rdata),
                            headers: {'Content-Type': 'application/json'}
                        }).then(response => {
                            return response.json();
                        }).then(rdata => {
                            alert('You have successfully registered'); //Display alert that you have successfully registered
                            ReactDOM.render(<LoginP/>,

                     document.getElementById('root'));
                        }).catch(err => {
                            alert("Error 2"+err);//Display alert
                        })
                   }

                   }).catch(err => {
                       alert("Error 1"+err);//Display alert
                   })
                 }
               }
    login(){ //login method
        ReactDOM.render(<LoginP/>, document.getElementById('root'));
    }

    render(){

        /* User (customer) can create a user account by using this usersignup form*/

        return(
            <div className="mainContainer">
                <div className="subContainer">
                <div className="backingContainer">

                    <div className="paddingContainer">
                        <div class="progressContainer">
                            <div class="progress_bar1" role="progressbar"  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress_bar2" role="progressbar"  aria-valuenow="30" aria-valuemin="0" ariavaluemax="100"></div>
                            <div class="progress_bar3" role="progressbar"  aria-valuenow="20" aria-valuemin="0" ariavaluemax="100"></div>
                        </div>
                    </div>


                    <div className="container_row">
                        <div className="container1">
                            <div className="header">
                                <h1>Train Tickets Booking Online</h1> /*Title of the web application*/
                            </div>
                            <form className="sub_padding">
                                <fieldset>
                                    <legend>
                                        <h2><b>SIGN UP</b></h2> /*Usersignup form*/
                                    </legend>

                                    <div className="group_form">
                                        <label htmlFor="InputUsername"> Username: </label>
                                        <input className="controls_form" id="InputUsername" placeholder="Enter Username" type="text" ref="username"/>
                                    </div>

                                    <div className="group_form">
                                        <label htmlFor="InputAddress"> Address: </label>
                                        <input className="controls_form" id="InputAddress" placeholder="Enter Address" type="text" ref="useraddress"/>
                                    </div>

                                    <div className="group_form">
                                        <label htmlFor="InputEmailAddress"> Email: </label>
                                        <input className="controls_form" id="InputEmailAddress" placeholder="Enter Email Address" type="email" ref="email"/>
                                    </div>

                                    <div className="group_form">
                                        <label htmlFor="InputPassword"> Password: </label>
                                        <input className="controls_form" id="InputPassword" placeholder="Enter Password" type="password" ref="password"/>
                                    </div>

                                    <div className="group_form">
                                        <label htmlFor="InputPassword2">Confirm Password: </label>
                                        <input className="controls_form" id="InputPassword2" placeholder="Enter Password Again" type="password" ref="confpassword"/>
                                    </div>

                                    <button type="button" className="button_primary" onClick={()=>{this.usersignup()}}> REGISTER </button> /*Register button*/

                                </fieldset>
                            </form>
                        </div>
                        <div className="container2">
                            <label><b> Already have an account? </b></label> /*If you already have an account you can login to the system by pressing sign in button*/
                            <div>
                                <button type="submit" className="button_primary" onClick={()=>{this.login()}}> SIGN IN </button> /*Sign in button*/
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default Usersignup;