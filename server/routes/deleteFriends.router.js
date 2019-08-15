const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.delete('/:user1id/:user2id', (req, res) => {
    console.log('DELETE friends server', req.params);
    const sqlText = `DELETE FROM "friends" WHERE (user_id_one = $1 AND user_id_two = $2) OR (user_id_one = $2 AND user_id_two = $1);`;
    const sqlValues = [req.params.user1id, req.params.user2id]
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