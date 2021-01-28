var mongoose=require('./traindbSchema');
var schema=mongoose.model('reservation');

//This class handles train ticket reservation requests
//This class manipulates data in reservation table

var controllerTrainReservation=function(){

    /*  This insert method is used to insert data into reservation table    */

    this.insert=function(data){ //insert method
        return new Promise(function(resolve,reject){
            var reservation=schema({
                ID:data.ID,
                trainName:data.trainName,
                ptotal:data.ptotal,
                date:new date()
            })
            reservation.save().then(function(){
                resolve({status: 200, message: "Added train tickets to train ticket reservation"})
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }


    this.deleteT = (id) => { //deleteT method
        return new Promise((resolve, reject) => {
            schema.remove({_id:id}).exec().then((data) => {
                resolve({status: 200, message: "You have Deleted"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
}


/* The controllerTrainReservation() method is exported for the cartRouter calss's use  */


module.exports=new controllerTrainReservation();
