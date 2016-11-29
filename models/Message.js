var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    Content: { type: String, require: true },
    User: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Message', MessageSchema);