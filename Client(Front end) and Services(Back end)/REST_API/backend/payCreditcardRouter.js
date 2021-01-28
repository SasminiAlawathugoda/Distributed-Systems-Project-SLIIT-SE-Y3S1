var controllerpayCreditcard=require('./controllerpayCreditcard');
var express=require('express');
var router=express.Router();

/*This insert method is used to add data to the table*/

router.post('/',function(req,res){
    controllerpayCreditcard.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


module.exports=router;