var mongoose = require('mongoose');
var mongUniqValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    UserName: { type: String, require: true, unique: true },
    FirstName: { type: String, require: true },
    LastName: { type: String, require: false },
    Password: { type: String, require: false },
    ImageUrl: { type: String, require: false },
    Profession: { type: Schema.Types.ObjectId, ref: 'Profession' },
    Ratting: { type: Number },
});
UserSchema.plugin(mongUniqValidator);
module.exports = mongoose.model('User', UserSchema);