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
    //[GET]/course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    //[PUT]/course/:id
    update_store(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //[DELETE]/course/:id
    delete_soft(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.send('ok'))
            .catch(next);
    }
    //[PATCH]/course/:id/restore
    restore_store(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.send('ok'))
            .catch(next);
    }
    //[DELETE]/course/:id/force
    delete_force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.send('ok'))
            .catch(next);
    }
    //[POST]/course/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }
    //[POST]/course/handle-form-action-trash
    handleFormActionTrash(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'delete':
                Course.deleteOne({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }
}

module.exports = new CourseController();
