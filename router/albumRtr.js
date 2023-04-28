const albumController = require('../controller/albumCtrl');
const albumRouter = require('koa-router')({
    prefix: '/album'
});

// albumRouter.get('/', albumController.getalbums);
// albumRouter.get('/:ID', albumController.getalbumById);
// albumRouter.put('/', albumController.updatealbum);
// albumRouter.post('/', albumController.insertalbum);
// albumRouter.delete('/:ID', albumController.deletealbumById);

module.exports = albumRouter;