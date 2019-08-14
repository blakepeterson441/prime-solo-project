const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', (req, res) => {
    console.log('POST friends server', req.body);
    const sqlText = `INSERT INTO friends (user_id_one, user_id_two, approved_date)
                        VALUES ($1, $2, now());`;
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