import React,{Component} from 'react';
import '../App.css';

class Searchtrain extends Component{ //Searchtrain class extends component

    getItem(e){
        e.preventDefault();
        const trainName=this.refs.trainName.value;
        const updatedata = this.props;
        var tdata={"trainName":trainName};
        console.log(updatedata.trainName);
        fetch('http://localhost:3000/train/'+tdata.trainName,{
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(tdata=>{
            updatedata.updateCall(tdata);
        }).catch(err=>{
            alert(err);
        })

    }


    render(){
        /*Search train*/


        return(


                <form>
                <div className="header">
                    <h1>Train Tickets Booking Online</h1> /*Title of the web application*/
                </div>
                <fieldset>
                    <div className="container3">
                        <h2> <b>Search Train </b> </h2>/*You can search trains  by train names and select the available train tickets*/
                        <div className="group_form">
                            <input className="controls_form" id="InputTrain" placeholder="Enter Train Name" ref="trainName"/>
                        </div>
                    </div>

                    <div className="train_search">
                        <button className="button_primary " onClick={this.getItem.bind(this)}> SEARCH </button> /*Search button*/
                    </div>
                </fieldset>
                </form>


        )
    }
}

export default Searchtrain;

