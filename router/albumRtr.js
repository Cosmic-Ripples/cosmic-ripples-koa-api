const albumController = require('../controller/albumCtrl');
const albumRouter = require('koa-router')({
    prefix: '/album'
});

albumRouter.get('/', () => ctx.body = 'Album Router');
albumRouter.get('/cover/:ID', albumController.getAlbumCover);

module.exports = albumRouter;