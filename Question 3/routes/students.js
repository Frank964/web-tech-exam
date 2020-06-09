var express = require('express');
var router = express.Router();

var Student = require('../models/Student.js');

/* GET /students listing. */
router.get('/', function(req, res, next) {
  Student.find(function (err, students) {
    if (err) return next(err);
    res.json(students);
  });
});

/* POST /students */
router.post('/', function(req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /students/id */
router.get('/:id', function(req, res, next) {
  Student.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* PUT /students/:id */
// router.put('/:id', function(req, res, next) {
//   Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* PUT /students/:id */
router.put('/', function(req, res, next) {
  Student.findByIdAndUpdate(req.body.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /students/:id */
router.delete('/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.body.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
