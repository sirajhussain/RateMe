var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Achievement = require('../models/Achievement');

router.route('/') // get all achievement
    .get(function (req, res) {
        Achievement.find({}, function (err, result) {
            if (err) {
                return res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            res.status(201).json({
                message: 'Achievements found',
                obj: result
            });
        });
    })
    .post(function (req, res) {
        /* Multiple inserts.
        //Example to post [{"user_id": "1234","content": ["This is conent line","This is conent line","This is conent line","This is conent line"]  }]
        var userId = req.body[0].user_id;
        var contents = req.body[0].content;
        var promises = [];
        contents.forEach(function (conent, idx) {
            var achievement = new Achievement({
                Content: conent,
                User: userId
            });
            var prom = profession.save();
            promises.push(prom);
        });
        Promise.all(promises).then(function (result) {
            res.json({ message: "Done!" });
        }).catch(function (err) {
            res.json({ message: "Failed!" });
        });*/
        var achievement = new Achievement({
            Content: req.body.Content,
            User: req.body.User,
            MediaUrl: req.body.MediaUrl
        });
        achievement.save(function (err, result) {
            if (err) {
                return res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            return res.status(201).json({
                message: 'Saved',
                obj: result
            });
        });
    })
router.route('/:id')
    .get(function (req, res) {
        Achievement.findById(req.params.id, function (err, preofession) {
            if (err) {
                return res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            res.status(201).json({
                message: 'Achievement found',
                obj: preofession
            });

        });
    })
    .delete(function (req, res) {
        Achievement.remove({
            _id: req.params.id
        }, function (err, user) {
            if (err) {
                return res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            res.json({ message: 'Successfully deleted' });
        });
    });
module.exports = router;