const { json } = require('express');
const Course = require('../models/Course');

class SiteController {
    //[GET]/news
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                console.log(courses);
            } else {
                res.status(400).json({ error: 'Lỗi' });
            }
        });
        // res.render('home');
    }
    //[GET]/news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
