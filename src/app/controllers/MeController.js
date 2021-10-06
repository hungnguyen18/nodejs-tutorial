const { json } = require('express');
const Course = require('../models/Course');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mogoose');

class MeController {
    //[GET]/me/stored/courses
    indexMe(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
