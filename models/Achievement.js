var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AchievementSchema = new Schema({
    Content: { type: String, require: true },
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    MediaUrl: { type: String, require: true }
});
module.exports = mongoose.model('Achievement', AchievementSchema);