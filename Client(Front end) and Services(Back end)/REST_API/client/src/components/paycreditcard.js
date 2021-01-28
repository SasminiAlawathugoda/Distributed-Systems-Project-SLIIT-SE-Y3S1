//From paycreditcard component, we can do the sampath bank credit card payments
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import '../App.css';
import LoginPage from './userlogin';

class Paycreditcard extends Component{ //Paycreditcard extends Component

    constructor(props){
        super(props);
        this.state= {
            uname:this.props.uname,
            email:this.props.email,
            userdiscount:0,
            subtotal:this.props.ptotal
        }
    }

    //Credit card payment details will be sent to the backend server
    pyHome=function(uname,creditCardNum,cvcNum,ptotal){
        console.log(uname +"--"+ creditCardNum +"--"+ cvcNum +"--"+ ptotal);

        var totalSub=parseFloat(this.state.subtotal);

        var rdata={"email":this.state.email,"uname":uname,"creditCardNum":creditCardNum,"cvcNum":cvcNum,"ptotal":ptotal,"subtotal":totalSub};
        fetch('http://localhost:3000/paycreditcard/',{
            method: 'POST',
            body: JSON.stringify(rdata),
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(rdata=>{
            console.log(rdata);
        }).catch(err=>{
            alert("Error "+err); //Display alert
        })



        ReactDOM.render(<App uname={this.state.uname}  email={this.state.email}/>, document.getElementById('root'));
    }
    userLogout=function(e){ //userLogout function to logout from the user account
        ReactDOM.render(<LoginPage/>, document.getElementById('root'));
    }



    pback(){ //This function to go back to the previous page
        ReactDOM.render(<App uname={this.state.uname}  email={this.state.email}/>, document.getElementById('root'));
    }

    render(){
        var ptotal=JSON.stringify(this.props.ptotal);
        return(

        /* Sampath Bank Credit Card Payment Interface*/
            <div className="mainContainer">

                <div class="progressContainer">
                    <div class="progress_bar1" role="progressbar"  ariavaluenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress_bar2" role="progressbar"  aria-valuenow="30" aria-valuemin="0" ariavaluemax="100"></div>
                    <div class="progress_bar3" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className={"row_back"}>
                    <button type="submit" class="button_primary3"  onClick={()=>{this.pback()}}> BACK </button> /*BACK button*/
                </div>

                <div className="row_signout">
                    <p><b>Hello! Welcome to Train Tickets Booking Online! </b></p> /*Display welcome message*/
                    <button type="button" class="button_primary2" onClick={()=>this.userLogout()}> SIGN OUT </button> /*SIGN OUT button*/
                </div>

                <div className="header">
                    <h1>Train Tickets Booking Online</h1> /*Title of the application*/
                </div>

                <div className="container_row">
                    <div className="container1">

                        <form>
                            <fieldset>

                                   <legend>

                                       <h2><b> Credit Card Payment - Sampath Bank </b></h2> /*Credit card payment interface*/

                                    </legend>

                                <div class="group_form">
                                    <label for="InputCardHoldersName"> Card Holder's Name: </label>
                                    <input class="controls_form" id="name" placeholder="Enter Card Holder's Name" type="text"/>
                                </div>
                                <div class="group_form">
                                    <label for="InputCardNo"> Credit Card Number: </label>
                                    <input class="controls_form" id="cardNumber" placeholder="Enter Credit Card Number" type="text"/>
                                </div>
                                <div class="group_form">
                                    <label for="InputCVCNo"> CVC Number (3 digit no. at the back of your credit card): </label>
                                    <input class="controls_form" id="cvc" placeholder="Enter CVC Number" type="text"/>
                                </div>

                                <div class="group_form">
                                    <label for="InputTotal"><b> TOTAL: {this.props.ptotal} LKR</b></label> /*Display total price*/
                                </div>
                                <div class="group_form">
                                    <label for="InputDiscount"><b> DISCOUNT: {this.state.userdiscount} LKR</b></label> /*Display discounts*/
                                </div>
                                <div class="group_form">
                                    <label for="InputSubtotal"><b> SUBTOTAL: {this.state.subtotal} LKR</b></label>/*Display subtotal*/
                                </div>
                                /*Submit button*/
                                <button type="submit" class="button_primary"  onClick={()=>this.pyHome(document.getElementById("uname").value,document.getElementById("creditCardNum").value,document.getElementById("cvcNum").value, ptotal)}> SUBMIT </button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Paycreditcard;