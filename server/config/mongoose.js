const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/opa',{useNewUrlParser: true})
    .then(()=>{
        console.log('mongo iniciado');
    },
    (err)=>{
        console.log(err);
    });




