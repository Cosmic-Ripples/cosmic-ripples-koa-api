const albumController = require('../controller/albumCtrl');
const albumRouter = require('koa-router')({
    prefix: '/album'
});

// albumRouter.get('/', albumController.getalbums);
albumRouter.get('/cover/:ID', albumController.getAlbumCover);

module.exports = albumRouter;