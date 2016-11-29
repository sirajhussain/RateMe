var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfessionSchema = new Schema({
    Name: { type: String, require: true }
});
module.exports = mongoose.model('Profession', ProfessionSchema);