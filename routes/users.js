var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');
var Profession = require('../models/Profession');

var userAchievements = require('./user_achievements');
var userProfessions = require('./user_professions');

//sub router
router.use('/:userId/achievements', userAchievements);
router.use('/:userId/professions', userProfessions);
/* GET users listing. */
/* Basic CRUD */
router.route('/')
  .get(function (req, res, next) {
    User.find({}, function (err, users) {
      if (err) {
        res.status(404).json({
          message: 'An error occored',
          obj: err
        });
      }
      res.status(201).json({
        message: 'List of users',
        obj: users
      });
    });
  })
  .post(function (req, res, next) {
    //{"UserName": "sirajhussain","FirstName": "Siraj","LastName": "Hussain","Password": "123","ImageUrl": "url","Profession:"58348b472b3eda0e709024ab","Ratting": "4"}
    var user = new User({
      UserName: req.body.UserName,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Password: req.body.Password,
      ImageUrl: req.body.ImageUrl,
      Profession: req.body.Profession,
      Ratting: req.body.Ratting
    });
    user.save(function (err, result) {
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
router.route('/:userId')
  .get(function (req, res) {
    User.findById(req.params.userId).populate('ProfessionCategory').exec(function (err, user) {
      if (err) {
        return res.status(404).json({
          message: 'An error occored',
          obj: err
        });
      }
      res.status(201).json({
        message: 'user found',
        obj: user
      });
    })
    /*User.findById(req.params.id, function (err, user) {

    });*/
  })
  .delete(function (req, res) {
    User.remove({
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
/* Basic CRUD */

module.exports = router;
