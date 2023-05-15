const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp').then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);
})