var controllerTrainReservation=require('./controllerTrainReservation');
var express=require('express');
var router=express.Router();

/*This post request method calls the insert method in controllerTrainReservation class*/

router.post('/',function(req,res){
    controllerTrainReservation.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

/*This delete request calls the deleteT method in controllerTrainReservation class */

router.delete('/:id', (req, res) => {
    controllerTrainReservation.deleteT(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});


module.exports=router;