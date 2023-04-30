const db = require('../database/connection');
const sendfile = require('koa-sendfile');

class albumController {
    static getAlbumCover(ctx) {
        /**
         * Returns an image file for an Album's cover
         */
        return new Promise((resolve, reject) => {
            db.query({
                sql: `SELECT Cover_Path FROM Album WHERE ID = ?;`,
                values: [ctx.params.ID]
            }, (err, res) => {
                if (err) {
                    ctx.status = 400;
                    ctx.body = err.sqlMessage ?? 'Unknown Error!';
                    reject(err);
                }
                const path = res[0]['Cover_Path'];
                ctx.status = 200;
                resolve(path);
            });
        }).then(async (path) => {
            await sendfile(ctx, 'media_library/' + path);
        });
    }
}

module.exports = albumController;