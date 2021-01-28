//TicketReservation component is used to display the details of your train ticket reservation
/*When you search train names and select available tickets, number of tickets, date, time and click the book tickets button,
 the total price, train name will be displayed in train reservation section*/
//You can select the payment method from train reservation section

import React,{Component} from 'react';
import Paycreditcard from './paycreditcard';
import PayDialog from './payDialog';
import ReactDOM from "react-dom";
import '../App.css';

class TicketReservation extends Component{ //TicketReservation class extends component

    constructor(props){
        super(props);
        this.state= {
            uname:this.props.uname,
            email:this.props.email
        }
    }

    //Paycreditcard component will be rendered if the user(customer) clicks the credit card payment method

    payCreditcardm=function(totalPrice){
        ReactDOM.render(<Paycreditcard ptotal={totalPrice} uname={this.state.uname} email={this.state.email}/>,
            document.getElementById('root'));
    }

    //PayDialog component will be rendered if the user(customer) clicks the dialog payment method.

    payDialogm=function(totalPrice){
        ReactDOM.render(<PayDialog ptotal={totalPrice} uname={this.state.uname}  email={this.state.email}/>,
            document.getElementById('root'));
    }


    render(){ //Train ticker reservation list
        var TrainReservationList=this.props.trainReservation.map((nameTrain)=>{
            return (
                <div key={nameTrain}>
                    <p>{nameTrain}</p>

                </div>
            )
        })


        const ticketPrices=this.props.ptotal;
        const quantity=this.props.quantityTotal;
        var totalPrice=0;
        var quantityTotal=quantity.length;

        for(var i=0;i<ticketPrices.length;i++){
            totalPrice=totalPrice+ticketPrices[i]*parseInt(quantity[i],10);
        }

        return(

            // In train tickets reservation section, display the selected train tickets train name and total price

            <div className="sp_container">
            <ul>
                <h2><b> Train Tickets Reservation </b></h2>
                {TrainReservationList}
                <p><b>Total Price :{totalPrice} LKR</b></p> /*Display the total price of your reservation*/

                <p><h3><b>Select your Payment Method</b></h3></p> /*You can select the payment method*/
                <div className="container_row">
                    <div className="container2">
                        /*Credit card payment button*/
                        <button type="button" class="cpay_button" onClick={()=>this.payCreditcardm(totalPrice)}> Credit Card Payment </button>
                    </div>
                    <div className="container2">
                        /*Dialog payment button*/
                        <button type="button" class="dpay_button" onClick={()=>this.payDialogm(totalPrice)}> Dialog Payment </button>
                    </div>
                </div>
            </ul>
            </div>

        )
    }
}



export default TicketReservation;