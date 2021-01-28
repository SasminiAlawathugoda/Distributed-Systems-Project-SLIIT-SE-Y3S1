//This searchlist component display the train ticket details when the customer(user) search by pressing search button.
//When the user book the train tickets by pressing book tickets button, the details will be sent to ticketReservation components.

import React,{Component} from 'react';
import '../App.css';

class SearchList extends Component{ //Searchlist class extends component
    render(){
        var ucount=0;
        if(this.props.train_Results.data!=undefined){
            var train_List=this.props.train_Results.data.map(nameTrain=>{
                ucount=ucount+1;

                return (
                    //Display the train name you searched, available train tickets, price of a ticket, user can input number of tickets
                    <div className="list_trains" key={nameTrain._id}>
                        <div className="container2">
                            <div className="group_list">

                                <div className="group_list_trains">


                                    <div className="train_reservation">
                                        <p className="trainReservation">{nameTrain.tname}</p>
                                        <p className="train_Reservation">Price: {nameTrain.tprice} LKR</p>
                                        <p className="train_Reservation">Date: <input type="textbox" id="date" /></p>
                                        <p className="train_Reservation">Time: <input type="textbox" id="time"/></p>
                                        <p className="train_Reservation">Quantity: <input type="textbox" id="quantity"/></p>
                                        <p className="train_Reservation">Please verify if you are a Government Employee</p>
                                        <p className="train_Reservation">NIC: <input type="textbox" id="nic"/></p>
                                        <button className="verify_btn" type="submit" onClick={()=>{this.verifyemployee()}} > VERIFY </button> /*Verify button*/
                                        <p className="train_Reservation">Discount: {nameTrain.tdiscount} %</p>
                                        <div className="info_reservation">
                                            <div className="train_info">
                                                <button className="train_reserve_btn" onClick={()=>{this.props.trainReservation(nameTrain.tname,nameTrain.tprice,document.getElementById("quantity").value);
                                                    this.props.total(nameTrain.tprice);
                                                    this.props.totalQuantity(document.getElementById("quantity").value);
                                                }}>BOOK TICKETS
                                                </button>
                                                <button type="submit" className="button_primary" onClick={()=>{this.usersignup()}}> SIGN UP </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })


            if(ucount==0){
                return (
                    <div className="container2">
                        <h5> Train details are not found </h5> /*Error message will be displayed when the train name you searched is not found*/
                    </div>
                )
            }
        }

        return(
            <ul>
                {train_List}
            </ul>

        )
    }
}

export default SearchList;

