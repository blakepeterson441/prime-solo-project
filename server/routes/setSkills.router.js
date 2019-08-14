const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', (req, res) => {
    console.log('POST skills server', req.query);
    const sqlText = `INSERT INTO "user_games" ( user_id, game_id, overall_skill, 
                        offensive_skill, defensive_skill, aggression)
                        VALUES ($1, $2, $3, $4, $5, $6);`
    const sqlValues = [req.query.user, req.query.game, req.query.overall, req.query.offensive, req.query.defensive, req.query.aggression]
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