/**
 * @file CORS.js
 * @author Dr. Ali Kooshesh
 * @author Owen Mastropietro
 * @description This file contains the code for the CORS middleware for
 * the draught-services-api. The 'exposeHeaders' property of the cors
 * object specifies which headers should be exposed to the client,
 * meaning that they are available to JavaScript code in the client's
 * browser. The 'credentials' property is set to true so that cookies
 * and other credentials can be sent with cross-origin requests.
 */

const cors = require('kcors');

/**
 * @param {object} app - The Koa app object
 * @returns {void}
 * @description - This function registers the CORS middleware with the Koa app
 * by calling koa-cors with an object that specifies the CORS headers to be
 * exposed, including the Access-Token and Cookie headers, and whether or not
 * credentials should be sent with the requests.
 */
module.exports = function (app) {
    /* Send standard CORS headers with all origins allowed */
    app.use(cors({
        credentials: true,
        exposeHeaders: ['Access-Token', 'Cookie']
    }));
};
