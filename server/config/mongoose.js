const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

options = {
    useNewUrlParser: true,
    user: 'mongoadmin',
    pass: 'secret',
    authSource: 'admin'
}

mongoose.connect('mongodb://localhost:27017/opa',options)
    .then(()=>{
        console.log('mongo iniciado');
    },
    (err)=>{
        console.log(err);
    });




