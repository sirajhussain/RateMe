var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DiLikesSchema = new Schema({
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    LikeUser: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('DisLikes', DiLikesSchema);