const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.delete('/', (req, res) => {
    console.log('DELETE friends server', req.body);
    const sqlText = `DELETE FROM "friends" WHERE user_id_one = $1 AND user_id_two = $2;`;
    const sqlValues = [req.body.user1, req.body.user2]
    pool.query(sqlText, sqlValues)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('error making skills get', error);
            res.sendStatus(500);
        });
});

module.exports = router;