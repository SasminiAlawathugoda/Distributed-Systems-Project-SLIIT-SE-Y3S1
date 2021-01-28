var controllerTrain=require('./controllerTrain');
var express=require('express');
var router=express.Router();

/*To insert data into the train details table, insert function in controllerTrain class will be called*/

router.post('/',function(req,res){
    controllerTrain.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

/*To retrieve all the data, getData function in controllerTrain class will be called*/

router.get('/', (req, res) => {
    controllerTrain.getData().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

/*To retrieve data of a train reservation, getT method in controllerTrain class will be called*/

router.get('/:trainName', (req, res) => {
    controllerTrain.getT(req.params.foodname).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});
/*To delete data of a train ticket reservation, deleteT method in controllerTrain class will be called*/

router.delete('/:trainName', (req, res) => {
    controllerTrain.deleteT(req.params.foodname).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});


module.exports=router;
