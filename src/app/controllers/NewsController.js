
class NewsController {

    // [GET]  /news
    index (req, res) {
        res.render('news')
    }

    //[GET] /news/:slug

    show(req, res){
        res.send('NEW DETAIL')
    }
}

// phut 37 routes controller 


module.exports = new NewsController;