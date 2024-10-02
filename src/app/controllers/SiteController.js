
class SiteController  {

    // [GET]  /news
    index (req, res) {
        res.render('home')
    }

    //[GET] /search 
    search(req, res){
        res.render('search')
    }
}

// phut 37 routes controller 


module.exports = new SiteController ;