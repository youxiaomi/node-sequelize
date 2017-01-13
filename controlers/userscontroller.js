/**
 * Created by squid on 17/1/12.
 */


module.exports = function (router,models) {
    router.get('/users', function(req, res, next) {
        models.users.findAll().then(function (data) {
            // res.send(data[0]);
            res.render('test-index.ejs')
        })

    });

}