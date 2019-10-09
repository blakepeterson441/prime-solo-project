const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET currentSkills server', req.query.id);
    const sqlText = `SELECT users.id, users.username, games.name, user_games.overall_skill,
                        user_games.offensive_skill, user_games.defensive_skill, user_games.aggression
                        FROM user_games
                        JOIN users ON users.id = user_games.user_id 
                        JOIN games ON games.id = user_games.game_id
                        WHERE users.id = $1;`;
    const sqlValues = [req.query.id];
    pool.query(sqlText, sqlValues)
        .then(response => {
            res.send(response.rows[0])
        })
        .catch(error => {
            console.log('error getting current skills', error);
            res.sendStatus(500);
        })
})

module.exports = router;