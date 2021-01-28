var controllerTrainUser=require('./controllerTrainUser');
var express=require('express');
var router=express.Router();

/*To insert a new user(customer) to the system, post request method calls the insert method in controllerTrainUser class*/

router.post('/',function(req,res){ //post request method
    controllerTrainUser.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

/*To get all the details of the users, get request method calls the get method in controllerTrainUser class*/

router.get('/', (req, res) => { //get request method
    controllerTrainUser.get().then(data => {
    res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

/*To get the details of a particular user based on email address and password, get request calls the getUser method in controllerTrainUser class*/

router.get('/:email/:password', (req, res) => {//get request method
    controllerTrainUser.getUser(req.params.email,req.params.password).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

/*To get the details of a particular user based on user email address, get request method calls the emailCheck method in controllerTrainUser class*/

router.get('/:email', (req, res) => { //get request method
    controllerTrainUser.emailCheck(req.params.email).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

/*To delete the user id of a particular user, delete request calls the userDelete method in controllerTrainUser class*/

router.delete('/:id', (req, res) => { //delete method
    controllerTrainUser.userDelete(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

module.exports=router;