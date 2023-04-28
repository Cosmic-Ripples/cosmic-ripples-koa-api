const artistController = require('../controller/artistCtrl');
const artistRouter = require('koa-router')({
    prefix: '/artist'
});

// artistRouter.get('/', artistController.getartists);
// artistRouter.get('/:ID', artistController.getartistById);
// artistRouter.put('/', artistController.updateartist);
// artistRouter.post('/', artistController.insertartist);
// artistRouter.delete('/:ID', artistController.deleteartistById);

module.exports = artistRouter;