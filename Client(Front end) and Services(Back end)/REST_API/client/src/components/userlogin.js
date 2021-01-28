/*This is the Userlogin component*/
/*User login component is initially displayed when the user go to the site*/

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from "../App";
import Usersignup from "./usersignup";
import LoginP from './userlogin';
import '../App.css';

class Userlogin extends Component{ //Userlogin class extends component

   /*This toggle method will be called after the user(customer) enters the email address and password and clicks the sign in button*/

    toggle=function(e){

        //This method checks whether the username and password entered by the user are valid.
        //If the credentials are valid user will be logged to the user account.
        //If the credentials are invalid error message will be displayed.

        const email=this.refs.email.value;
        const password=this.refs.password.value;

        if(email==='' || password===''){ //Display an error message if the username or password is empty
            alert('Error! Email or Password entered is empty. Please enter all the all the fields');//Display alert
        }

        else {
            var logincredentials = {"email": email, "password": password};
            var ucount = false;

            //Backend server will be called
            //Bckend server will route the request to the main class which handles all the requests based on user table

            fetch('http://localhost:3000/users/' + logincredentials.email + '/' + logincredentials.password, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(rdata => {
                var users = JSON.stringify(rdata);
                if (users != '[]') {
                    console.log(users);
                    ucount = true;
                    console.log(rdata);
                    for(var users of rdata){
                        var uname=users.uname;
                    }
                    ReactDOM.render(<App uname={uname} email={email}/>, document.getElementById('root'));
                }
                else {
                    alert("Error! Username or password is invalid.Please enter valid credentials");//Display alert
                }
            }).catch(err => {
                alert(err);
            })
            if (count == true) {
                ReactDOM.render(<App/>, document.getElementById('root'));
            }
            else {
                ReactDOM.render(<LoginP/>, document.getElementById('root'));
            }
        }
    }

    usersignup(){
        //This usersignup method is called when the register button is clicked.
        //usersignup method renders usersignup components

        ReactDOM.render(<Usersignup/>, document.getElementById('root'));
    }

    render(){
        return(


        /* User can login to the system by using this user login form  */

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
                                <b><h2>LOGIN</h2></b> /*Login form*/
                            </legend>

                            <div className="group_form">
                                <label htmlFor="InputEmail1"> Email: </label>
                                <input className="controls_form" id="InputEmail1" placeholder="Enter Email Address" type="email" ref="email"/>
                            </div>
                            <div className="group_form">
                                <label htmlFor="InputPassword1"> Password: </label>
                                <input className="controls_form" id="InputPassword" placeholder="Enter Password" type="password" ref="password"/>
                            </div>

                            <button type="submit" className="button_primary" onClick={()=>this.toggle()}> SIGN IN </button>/*sign in button*/

                        </fieldset>
                    </form>
                </div>

                <div className="container2">
                    <label><b> Don't have an account? </b></label>/*If the user don't have an account user can create an account by pressing signup button*/
                    <div>
                        <button type="submit" className="button_primary" onClick={()=>{this.usersignup()}}> SIGN UP </button> /*Sign up button*/
                    </div>

                </div>
            </div>


                </div>
            </div>
            </div>
        )
    }
}

export default Userlogin;