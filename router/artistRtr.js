const artistController = require('../controller/artistCtrl');
const artistRouter = require('koa-router')({
    prefix: '/artist'
});

artistRouter.get('/', (ctx) => ctx.body = 'Artist Router');
artistRouter.get('/image/:ID', artistController.getArtistImage);

module.exports = artistRouter;