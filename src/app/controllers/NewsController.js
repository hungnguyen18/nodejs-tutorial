class NewsController {
    //[GET]/news
    index(req, res) {
        res.render('news');
    }
    //[GET]/news/:slug
    show(req, res) {
        res.render('news/covid');
    }
}

module.exports = new NewsController();
