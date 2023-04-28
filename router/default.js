const metaDataRouter = require('./metaDataRtr.js');
const streamRouter = require('./streamRtr.js');

const defaultRouter = require('koa-router')({
    prefix: '/api/v1'
});

defaultRouter.get('/', (ctx) => {
    ctx.body = 'Welcome to the Streaming App REST API'
});

defaultRouter.use(
    metaDataRouter.routes(),
    streamRouter.routes()
);

module.exports = api => {
    api.use(defaultRouter.routes());
    api.use(defaultRouter.allowedMethods());
};
