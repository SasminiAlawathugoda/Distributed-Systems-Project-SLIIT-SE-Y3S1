var mongoose=require('./traindbSchema');
var schema=mongoose.model('paycreditcard');
const nodemailer = require('nodemailer');

var controllerpayCreditcard=function(){

   /*Use insert method to insert data into the table in the database, when called by the payCreditcardRouter*/

    this.insert=function(data){ //insert method
        return new Promise(function(resolve,reject){
            var paycreditcard=schema({
                email:data.email,
                uname:data.uname,
                creditCardNum:data. creditCardNum,
                cvcNum:data.cvcNum,
                ptotal:data.ptotal,
                subTot:data.subTot
            })
            paycreditcard.save().then(function(){
                resolve({status: 200, message: "Credit card payment details are added"})
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })


    /*  This is used to send payment confirmation email to the customer */

            var output=`
                 <b>Train Tickets Booking Online</b>
                 <p>Dear Sir/Madam, We have received your Online Train Ticket Reservation with a payment of ${data.subTot} LKR. Thank you for reserving your online tickets with Train Tickets Booking Online.</p>
                 
                   `;


    let emailTransporter = nodemailer.createEmailTransport({
        service: 'gmail',
        secure: false,
        port:25,

        auth: {
            user: 'trainticketsbookingonline@gmail.com', /*username*/
            pass: 'trainticketsonline123' /*password*/
        },
        tls:{
            rejectUnauthorized:false
        }
    });


    let emailOpt = { /*email options*/
        from: '"Train Tickets Booking Online" <trainticketsbookingonline@gmail.com>',
        to: data.email,
        subject: 'Train Tickets Booking Online Payment Confirmation',
        text: 'HELLO',
        html: output

    };

    emailTransporter.emailSend(emailOpt, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageID);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
        })


    }
}


module.exports=new controllerpayCreditcard();