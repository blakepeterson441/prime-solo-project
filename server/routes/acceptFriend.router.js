const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', (req, res) => {
    console.log('POST acceptFriend server', req.body);
    const sqlText = `INSERT INTO friends (user_id_one, user_id_two, approved, approved_date)
                        VALUES ($1, $2, 'TRUE', now());`;
    const sqlValues = [req.body.user1, req.body.user2]
    pool.query(sqlText, sqlValues)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('error accepting friend POST', error);
            res.sendStatus(500);
        });
});

module.exports = router;