const trackController = require('../controller/trackCtrl');
const trackRouter = require('koa-router')({
    prefix: '/track'
});

// trackRouter.get('/', trackController.gettracks);

module.exports = trackRouter;
