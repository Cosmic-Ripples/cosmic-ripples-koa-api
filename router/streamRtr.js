// const streamController = require('../controller/streamCtrl');
const streamRouter = require('koa-router')({
  prefix: '/stream'
});

streamRouter.get('/', (ctx) => {
  ctx.body = 'Stream Router';
});

module.exports = streamRouter;
