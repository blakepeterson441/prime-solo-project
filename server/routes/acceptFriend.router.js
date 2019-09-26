const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.put('/', (req, res) => {
    console.log('PUT acceptFriend server', req.body);
    const sqlText = `UPDATE friends SET approved='TRUE'
                        WHERE user_id_two = $1 AND user_id_one = $2;`;
    const sqlValues = [req.body.user1, req.body.user2]
    pool.query(sqlText, sqlValues)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('error accepting friend PUT', error);
            res.sendStatus(500);
        });
});

module.exports = router;