var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // mongoose's Promise has been depricated'
mongoose.connect('localhost:27017/RateMe');
