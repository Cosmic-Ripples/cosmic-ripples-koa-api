const db = require('../database/connection');

class trackController {
    static getTrackPaths(ctx) {
        /**
         * Returns an object of Track_ID : Track_Path
         */
        return new Promise((resolve, reject) => {
            db.query({
                sql: `SELECT * FROM Track;`,
                values: [ctx.params.ID]
            }, (err, res) => {
                if (err) {
                    ctx.status = 400;
                    ctx.body = err.sqlMessage ?? 'Unknown Error!';
                    reject(err);
                }
                ctx.body = Object.fromEntries(
                    res.map(track => [track.ID, track.Path])
                );
                ctx.status = 200;
                resolve();
            });
        });
    }
}

module.exports = trackController;