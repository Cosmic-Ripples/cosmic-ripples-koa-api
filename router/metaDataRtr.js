const metaDataController = require('../controller/metaDataCtrl');

const artistRouter = require('./artistRtr');
const albumRouter = require('./albumRtr');
const trackRouter = require('./trackRtr');

const metaDataRouter = require('koa-router')({
  prefix: '/metaData'
});

metaDataRouter.get('/', (ctx) => {
  ctx.body = 'Meta Data Router';
});

metaDataRouter.get('/db', metaDataController.getDB);

metaDataRouter.use(
  artistRouter.routes(),
  albumRouter.routes(),
  trackRouter.routes()
);

module.exports = metaDataRouter;
