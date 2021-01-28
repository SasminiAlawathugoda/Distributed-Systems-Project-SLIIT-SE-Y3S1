var mongoose=require('mongoose');
var schema=mongoose.Schema;

/*  Train details database schema  */

var itemsTrain=new schema({
    tname:{ //train name
        type:String,
        required:true
    },
    tprice:{ //train ticket price
        type:String,
        required:true
    },
    tQuantity:{ //train tickets quantity
        type:String,
        required:true
    }
})

/*   User(Customer) details database schema  */


var trainUser=new schema({
    uname:{ //name of the user
        type:String,
        required:true
    },
    useraddress: { //address of the user
        type: String,
        required: true
    },
    email:{ //email address of the user
        type:String,
        required:true
    },
    password:{ //password of the user
        type:String,
        required:true
    }

})


/*  Train ticket reservation details database schema  */

var reservation=new schema({
    ID:{ //id
        type:String,
        required:true
    },
    trainName:{ //name of the train

        type:String,
        required:true
    },
    ptotal:{ //total price
        type:String,
        required:true
    },
    date:{ //date
        type:String,
        required:true
    }
})


/*  Sampath bank credit card payment details database schema  */


var paycreditcard=new schema({
    email:{ //email of the user
        type:String,
        required:true
    },
    uname:{ //name of the user
        type:String,
        required:true
    },
    creditCardNum:{ //card holders credit card number
        type:String,
        required:true
    },
    cvcNum:{ //CVC number
        type:String,
        required:true
    },
    ptotal:{ //total price of the reservation
        type:String,
        required:true
    },
    subTot:{ //subtotal price of the reservation
        type:String,
        required:true
    }


})

/*  Dialog mobile payment details database schema */

var paydialog=new schema({
    email:{ //email address of the user
        type:String,
        required:true
    },
    userphone:{ //mobile phone number of the user
        type:String,
        required:true
    },
    userpin:{ //PIN number
        type:String,
        required:true

    },
    ptotal:{ //total price of the reservation
        type:String,
        required:true
    },
    subTot:{ //subtotal price of the reservation
        type:String,
        required:true
    }

})

/*  Verify employee details database schema  */

var verifyEmployee=new schema({
    email:{ //email address of the user
        type:String,
        required:true
    },
    uname:{ //name of the user

        type:String,
        required:true
    },
    nic:{ //nic number of the user
        type:String,
        required:true
    }
})

/*  Rename the database schemas you have created  */

mongoose.model('itemsTrain',itemsTrain);
mongoose.model('trainUser',trainUser);
mongoose.model('reservation',reservation);
mongoose.model('paycreditcard',paycreditcard);
mongoose.model('paydialog',paydialog);
mongoose.model('verifyEmployee',verifyEmployee);

/* Connect to the mongodb database  */
/*Create a database called TrainReservation*/


mongoose.connect('mongodb://127.0.0.1:27017/TrainReservation',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Successfully connected to the database");
})


module.exports=mongoose;