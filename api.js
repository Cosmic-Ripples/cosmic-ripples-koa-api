const koa = require('koa');
const koajson = require('koa-json');
const koabodyparser = require('koa-bodyparser');
const defaultRouter = require('./router/default.js');
const api = new koa();

const API_PORT = 8065;

api.use(async (ctx, next) => {
    /**
     * Log response times of api calls
     */
    const startTime = Date.now();
    await next();
    const responseTime = Date.now() - startTime;
    ctx.set('X-Response-Time', responseTime);
    console.log(
        `Type: ${ctx.method}\n`,
        `Status: ${ctx.status}\n`,
        `Path: ${ctx.url}\n`,
        `Response Time: ${responseTime}ms`
    );
});

api.use(async (ctx, next) => {
    /**
     * Log mySQL errors
     */
    try {
        await next();
    } catch (err) {
        console.log(
            `Status: ${ctx.status}\n`,
            `Path: ${ctx.url}\n`,
            `Error: ${err.sqlMessage ?? 'Unknown error!'}`
        );
    }
});

api.use(koajson());
api.use(koabodyparser());

require('./CORS.js')(api); /* added CORS headers to all responses */

defaultRouter(api);

const server = api.listen(API_PORT, () => {
    console.log(
        `API is listening on port ${server.address().port}: `,
        `\nhttp://localhost:${server.address().port}/api/v1/`
    );
}); // must use http://localhost:8065/api/v1/ or http://[::1]:8065/api/v1/
