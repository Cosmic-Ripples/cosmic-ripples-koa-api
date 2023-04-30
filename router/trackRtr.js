const trackController = require('../controller/trackCtrl');
const trackRouter = require('koa-router')({
    prefix: '/track'
});

trackRouter.get('/', () => ctx.body = 'Track Router');
trackRouter.get('/paths', trackController.getTrackPaths);

module.exports = trackRouter;
