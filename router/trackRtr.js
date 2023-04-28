const trackController = require('../controller/trackCtrl');
const trackRouter = require('koa-router')({
    prefix: '/track'
});

// trackRouter.get('/', trackController.gettracks);
// trackRouter.get('/:ID', trackController.gettrackById);
// trackRouter.put('/', trackController.updatetrack);
// trackRouter.post('/', trackController.inserttrack);
// trackRouter.delete('/:ID', trackController.deletetrackById);

module.exports = trackRouter;
