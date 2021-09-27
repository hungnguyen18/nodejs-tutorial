class NewsController {
    //[GET]/news
    index(req, res) {
        res.render('news');
    }
    //[GET]/news/:slug
    show(req, res) {
        res.render('covid');
    }
}

module.exports = new NewsController();
