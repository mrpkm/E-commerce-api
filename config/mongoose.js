const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://mrpk8065:123654@cluster0.hnjg5cl.mongodb.net/e_c_api?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


// mongoose.connect('mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;