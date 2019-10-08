const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET friends server', req.user);
    const sqlText = `SELECT * FROM user_games WHERE user_id=$1 AND game_id=$2;`;
    const sqlValues = [req.query.id, req.query.gameId];
    pool.query(sqlText, sqlValues)
        .then(response => {
            res.send(response.rows[0])
        })
        .catch(error => {
            console.log('error getting current pcn', error);
            res.sendStatus(500);
        })
})

module.exports = router;