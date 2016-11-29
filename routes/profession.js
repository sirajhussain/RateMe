var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profession = require('../models/Profession');

/* Basic CRUD */
router.route('/')
    .get(function (req, res, next) {
        Profession.find({}, function (err, professions) {
            if (err) {
                res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            res.status(201).json({
                message: 'List of professions',
                obj: professions
            });
        });
    })
    .post(function (req, res, next) {
        var profession = new Profession({
            Name: req.body.name
        });
        profession.save(function (err, result) {
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
    });
router.route('/:id')
    .get(function (req, res) {
        Profession.findById(req.params.id, function (err, profession) {
            if (err) {
                return res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            res.status(201).json({
                message: 'profession found',
                obj: profession
            });
        });
    })
    .delete(function (req, res) {
        Profession.remove({
            _id: req.params.id
        }, function (err, preofession) {
            if (err) {
                return res.status(404).json({
                    message: 'An error occored',
                    obj: err
                });
            }
            res.json({ message: 'Successfully deleted' });
        });
    });
/* Basic CRUD */

module.exports = router;