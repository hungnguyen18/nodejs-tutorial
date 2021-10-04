const { json } = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mogoose');

class CourseController {
    //[GET]/course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[GET]/course/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST]/course/create_store
    create_store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect(`/`))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
