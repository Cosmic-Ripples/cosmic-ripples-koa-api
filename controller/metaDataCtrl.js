const db = require('../database/connection');

class metaDataController {
    // static getDB(ctx) {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             const [[artists], [albums], [tracks]] = Promise.all([
    //                 db.query(`SELECT * FROM Artist;`, (err, res) => {
    //                     return res;
    //                 }),
    //                 db.query(`SELECT * FROM Album;`, (err, res) => {
    //                     return res;
    //                 }),
    //                 db.query(`SELECT * FROM Track;`, (err, res) => {
    //                     return res;
    //                 }),
    //             ]);

    //             const db_obj = [
    //                 ...artists,
    //                 ...albums,
    //                 ...tracks
    //             ];

    //             ctx.body = db_obj;
    //             resolve();
    //         } catch (err) {
    //             ctx.status = 400;
    //             ctx.body = err.sqlMessage ?? 'Unknown Error!';
    //             reject(err);
    //         }
    //     });
    // }
    static getDB(ctx) {
        /**
         * Returns a monolithic object representing the entire database for 
         * testing purposes only
         */

        return new Promise((resolve, reject) => {
            const query1 = `SELECT * FROM Artist;`;
            const query2 = `SELECT * FROM Album;`;
            const query3 = `SELECT * FROM Track;`;

            db.query(query1, (err, res1) => {
                if (err) {
                    ctx.status = 400;
                    ctx.body = err.sqlMessage ?? 'Unknown Error!';
                    reject(err);
                }

                db.query(query2, (err, res2) => {
                    if (err) {
                        ctx.status = 400;
                        ctx.body = err.sqlMessage ?? 'Unknown Error!';
                        reject(err);
                    }

                    db.query(query3, (err, res3) => {
                        if (err) {
                            ctx.status = 400;
                            ctx.body = err.sqlMessage ?? 'Unknown Error!';
                            reject(err);
                        }

                        const albums = res2.map(album =>
                            ({ ...album, Tracks: res3.filter(track => track.Album_ID == album.ID) })
                        );
                        const artists = res1.map(artist =>
                            ({ ...artist, Albums: albums.filter(album => album.Artist_ID == artist.ID) })
                        );

                        ctx.body = artists;
                        ctx.status = 200;
                        resolve();
                    });
                });
            });
        });
    }

    // static getDB(ctx) {
    //     /**
    //      * Returns a monolithic object representing the entire database for 
    //      * testing purposes only
    //      */

    //     return new Promise((resolve, reject) => {
    //         const query = `SELECT * FROM Artist;`;
    //         db.query(query, (err, res) => {
    //             if (err) {
    //                 ctx.status = 400;
    //                 ctx.body = err.sqlMessage ?? 'Unknown Error!';
    //                 reject(err);
    //             }
    //             ctx.body = res;
    //             ctx.status = 200;
    //             resolve();
    //         });
    //     });
    // }
}

module.exports = metaDataController;
