var express = require('express');
var router = express.Router({ mergeParams: true });
var mongoose = require('mongoose');
var Profession = require('../models/Profession');
var User = require('../models/User');

router.route('/')
    .get(function (req, res) {
        debugger;//Get profession id first
        User.findById(req.params.userId).select("Profession").exec(function (err, user) {
            Profession.findById(user.Profession, function (err, result) {
                if (err) {
                    return res.status(404).json({
                        message: 'An error occored',
                        obj: err
                    });
                }
                res.status(201).json({
                    message: 'Professions found',
                    obj: result
                });
            }).catch(function (err) {
                return res.status(404).json({
                    message: 'Internal server error' + err.message,
                    obj: err
                });
            });
        });

    });
router.route('/:professionId')
    .get(function (req, res) {
        res.status(200)
            .send('hello item ' + req.params.professionId + ' from user ' + req.params.userId);
    });

module.exports = router;