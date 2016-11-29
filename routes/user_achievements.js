var express = require('express');
var router = express.Router({ mergeParams: true });
var mongoose = require('mongoose');
var Achievement = require('../models/Achievement');

router.route('/')
    .get(function (req, res) {
        debugger;
        Achievement.find({ User: req.params.userId }, function (err, result) {
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
        }).catch(function (err) {
            return res.status(404).json({
                message: 'Internal server error' + err.message,
                obj: err
            });
        });
    });
router.route('/:achievementId')
    .get(function (req, res) {
        res.status(200)
            .send('hello item ' + req.params.achievementId + ' from user ' + req.params.userId);
    });

module.exports = router;