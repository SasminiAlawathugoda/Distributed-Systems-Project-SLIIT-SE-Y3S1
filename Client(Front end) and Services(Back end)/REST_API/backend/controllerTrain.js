var mongoose=require('./traindbSchema');
var schema=mongoose.model('itemsTrain');

/*This class manages the train details requests*/
/*This class manipulates data in train details table*/

var ControllerTrain=function(){

    /*Use insert function to insert data into itemsTrain table*/

    this.insert=function(data){ //insert method
        return new Promise(function(resolve,reject){
            var itemsTrain=schema({
                tname:data.tname,
                tprice:data.tprice,
                tQuantity:data.tQuantity
            })
            itemsTrain.save().then(function(){
                resolve({status: 200, message: "Tran ticket details are added"})
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })


    }

    /* This method is used to retrieve all the train details     */

    this.getData() = () => { //getData method

        return new Promise((resolve, reject) => {
            schema.find().exec().then((data) => {

                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    /*This method is used to retrieve train ticket details*/

    this.getT = (trainName) => { //getT method
        return new Promise((resolve, reject) => {
            console.log(trainName);
            var foodName = new RegExp(["^", trainName, "$"].join(""), "i");
            schema.find({name:trainName}).then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    /*This method is used to delete train ticket details*/
    this.deleteT = (trainName) => { //deleteT method
        return new Promise((resolve, reject) => {
            schema.remove({name:trainName}).exec().then((data) => {
                resolve({status: 200, message: "You have Deleted"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}

//For the use of trainDetailsRouter class controllerTrain method is exported
module.exports=new ControllerTrain();