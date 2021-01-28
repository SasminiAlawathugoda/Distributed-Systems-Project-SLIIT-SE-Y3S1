var mongoose=require('./traindbSchema');
var schema=mongoose.model('trainUser');

/*This class manipulates data about users in the user details table*/

var controllerTrainUser=function(){
    /*Create a insert method to insert data about users into user details table*/

    this.insert=function(data){ //insert method
        return new Promise(function(resolve,reject){
            var trainUser=schema({
                uname:data.uname,
                useraddress:data.useraddress,
                email:data.email,
                password:data.password

            })
            trainUser.save().then(function(){
                resolve({status: 200, message: "New user(customer) is added"})
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })

}

    /*  Use get method to retrieve all the data about the users   */

    this.get = () => { //get method
        return new Promise((resolve, reject) => {

        schema.find().sort({random: 1}).limit(1).exec().then((data) => {
            resolve({status: 200, data: data});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
        })
    }

    /* Use getUser method to get all the data of a particular user(customer) based on user's email address and password*/

    this.getUser = (email,password) => { //getUser method
        return new Promise((resolve, reject) => {
            schema.find({email:email,password:password}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    /*This emailCheck method is used to check whether the email address you entered has been previously entered or not*/


    this.emailCheck = (email) => { //emailCheck method
        return new Promise((resolve, reject) => {
            schema.find({email:email}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    /*This userDelete method is used to delete a particular user id*/
    this.userDelete = (id) => { //userDelete method
        return new Promise((resolve, reject) => {
            schema.remove({_id:id}).exec().then((data) => {
                resolve({status: 200, message: "You have deleted"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }


}


/*  The controllerTrainUser() method is exported for the userRouter calss's use  */

module.exports=new controllerTrainUser();