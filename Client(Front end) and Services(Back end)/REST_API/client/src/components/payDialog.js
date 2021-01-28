//From payDialog component we can do the dialog payment
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import '../App.css';
import LoginPage from './userlogin';

class PayDialog extends Component{ //PayDialog class extends Component

    constructor(props){
        super(props);
        this.state= {
            uname:this.props.uname,
            email:this.props.email,
            userdiscount:0,
            subtotal:this.props.ptotal
        }
    }

    /*Dialog payment details will be sent to the backend server*/
    pyHome=function(userphone,userpin,ptotal){

        var totalSub=parseFloat(this.state.subtotal);

        var rdata={"email":this.state.email,"userphone":userphone,"userpin":userpin,"ptotal":ptotal,"subtotal" :totalSub};
        fetch('http://localhost:3000/paydialog/',{
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
        ReactDOM.render(<LoginPage/>,
            document.getElementById('root'));
    }



    pback(){ //This function to go back to the previous page
        ReactDOM.render(<App uname={this.state.uname}  email={this.state.email}/>, document.getElementById('root'));
    }


    render(){
        var ptotal=JSON.stringify(this.props.ptotal);
        return(
            /*This is the Dialog payment method interface*/
            <div className="mainContainer">

                <div class="progress">
                    <div class="progress-bar bar1" role="progressbar"  ariavaluenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-success bar2" role="progressbar"  aria-valuenow="30" aria-valuemin="0" ariavaluemax="100"></div>
                    <div class="progress-bar bg-info bar3" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className={"row_back"}>
                    <button type="submit" class="button_primary3"  onClick={()=>{this.pback()}}> BACK </button> /*Back button*/
                </div>



        <div className="row_signout">
            <p><b>Hello! Welcome to Train Tickets Booking Online! </b></p>
            <button type="button" class="button_primary2" onClick={()=>this.userLogout()}> SIGN OUT </button>/*Sign out button*/

        </div>
                <div className="header">
                    <h1>Train Tickets Booking Online</h1>
                </div>

                <div className="container_row">
                    <div className="container1">
                        <form>
                            <fieldset>
                                <legend>
                                    <h2><b> Dialog Payment </b></h2>/*Dialog payment interface*/
                                </legend>

                                <div class="group_form">
                                    <label for="InputPhoneNo"> Mobile Phone Number: </label>
                                    <input class="controls_form" id="phone" placeholder="Enter Mobile Phone Number" type="text"/>
                                </div>
                                <div class="group_form">
                                    <label for="InputPINno"> PIN Number (4 digit number) : </label>
                                    <input class="controls_form" id="pin" placeholder="Enter PIN Number" type="text"/>
                                </div>
                                <div class="group_form">
                                    <label for="InputAmount"> Amount: </label>
                                    <input class="controls_form" id="ptotal" placeholder="Enter Amount" type="text" />
                                </div>
                                <div class="group_form">
                                    <label for="InputTotal"><b>TOTAL: {this.props.totalPrice} LKR</b></label> /*Display total price*/
                                </div>
                                <div class="group_form">
                                    <label for="InputDiscount"><b>DISCOUNT: {this.state.userdiscount} LKR</b></label>/*Display discount if available*/
                                </div>
                                <div class="group_form">
                                    <label for="InputSubtotal"><b>SUBTOTAL: {this.state.subtotal} LKR</b></label>/*Display subtotal*/
                                </div>
                                /*Submit button*/
                                <button type="submit" class="button_primary" onClick={()=>this.pyHome(document.getElementById("userphone").value, document.getElementById("userpin").value,ptotal)}> SUBMIT </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default PayDialog;