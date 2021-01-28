//These components will be rendered after user(customer) logged in to the system successfully
//When the user logs in to the system user account will be displayed with a welcome message.
//Search trains, book tickets, ticket reservation components will be displayed

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LoginPage from './components/userlogin';
import Searchtrain from './components/searchtrain';
import Searchlist from './components/searchlist';
import TicketReservation from './components/ticketReservation';
import './App.css';

class App extends Component { //Class App extends Component

  constructor(props){
    super(props);
    this.state= {
      ptotal:[],
      tresults: {},
      reservation: [],
      quantityTotal:[],
      uname:this.props.uname,
      email:this.props.email
    }
  }

  ptotal(tprice){
    const totalPrice=this.state.ptotal.concat([tprice]);

    this.setState({
      total:totalPrice
    })
  }

  quantityTotal(quantity){
    const tqty=this.state.quantityTotal.concat([quantity]);
    this.setState({
      quantityTotal:tqty
    })
  }

  userLogout=function(e){
    ReactDOM.render(<LoginPage/>, document.getElementById('root'));
  }

  updateState(itemsTrain){

    this.setState({
      tresults:itemsTrain
    })
  }

  trainReservation(nameTrain,tprice,quantity){
    var ptotal=tprice*quantity;
    this.setState({val:this.state.val+ptotal});
    var totalPrice=this.state.val+ptotal;
    console.log("VAL "+totalPrice);
    var tresult=nameTrain.concat(" - " + ptotal+" LKR");
    const treserve=this.state.reservation.concat([tresult]);

    var email=JSON.stringify(this.props.email);
    console.log("EMAIL "+email)
    this.setState({
      resrvation:treserve,
      val:this.state.val+ptotal
    })

    var rdata={"ID":email,"trainName":nameTrain,"tprice":tprice,"ptotal":ptotal};
    fetch('http://localhost:3000/reservation/',{
      method: 'POST',
      body: JSON.stringify(rdata),
      headers:{'Content-Type':'application/json'}
    }).then(response=>{
      return response.json();
    }).then(rdata=>{
      console.log(rdata)
    }).catch(err=>{
      alert(err); //Display alert
    })

  }

  render() {
    return (
        <div className="mainContainer">

          <div class="progressContainer">

            <div class="progress_bar1" role="progressbar"  ariavaluenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress_bar2" role="progressbar"  aria-valuenow="30" aria-valuemin="0" ariavaluemax="100"></div>
            <div class="progress_bar3" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

          </div>

          <div className="row_signout">

            <p><b>Hello! Welcome to Train Tickets Booking Online! </b></p> /*Display welcome message when the user logs in to the system*/
            <button type="button" class="button_primary2" onClick={()=>this.userLogout()}> SIGN OUT </button> /*Sign out button*/

          </div>

          <div className="container_row">

            <div className="train_reserve1">
              <Searchtrain updateCall={this.updateState.bind(this)}/>
              <Searchlist train_Results={this.state.tresults} trainReservation={this.trainReservation.bind(this)} ptotal={this.total.bind(this)} quantityTotal={this.quantityTotal.bind(this)}/>
            </div>

            <div className="train_reserve2">
              <TicketReservation trainReservation={this.state.resrvation} reserveValue={this.state.val} ptotal={this.state.ptotal} quantityTotal={this.state.quantityTotal} uname={this.state.uname}  email={this.state.email}/>
            </div>


          </div>
        </div>
    );
  }
}

export default App;
