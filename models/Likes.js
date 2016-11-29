var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LikesSchema = new Schema({
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    DisLikeUser: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Likes', LikesSchema);