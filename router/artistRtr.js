const artistController = require('../controller/artistCtrl');
const artistRouter = require('koa-router')({
    prefix: '/artist'
});

// artistRouter.get('/', artistController.getartists);

module.exports = artistRouter;