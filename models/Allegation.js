var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AllegationSchema = new Schema({
    Content: { type: String, require: true },
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    AllegatedUser: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Allegation', AllegationSchema);