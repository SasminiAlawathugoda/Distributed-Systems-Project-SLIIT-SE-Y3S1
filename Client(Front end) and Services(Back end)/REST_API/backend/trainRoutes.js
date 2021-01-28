var express=require('express');
var trainRoutes=express.Router();

//All the classes that handle trainRoutes

var trainDetailsRouter=require('./trainDetailsRouter');
var trainUserRoutes=require('./trainUserRoutes');
var trainReservationRouter=require('./trainReservationRouter');
var payCreditcardRouter=require('./payCreditcardRouter');
var paydialogRouter=require('./paydialogRouter');


//To the specified class, trainRoutes the request.

trainRoutes.use('/train',trainDetailsRouter);
trainRoutes.use('/trainuser',trainUserRoutes);
trainRoutes.use('/reservation',trainReservationRouter);
trainRoutes.use('/paycreditcard',payCreditcardRouter);
trainRoutes.use('/paydialog',paydialogRouter);


module.exports=trainRoutes;



