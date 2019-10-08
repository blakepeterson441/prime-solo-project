const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET currentSkills server', req.query.game);
    const sqlText = `SELECT users.id, users.username, games.name, user_games.overall_skill, 
                    user_games.offensive_skill, user_games.defensive_skill, user_games.aggression
                    FROM games
                    JOIN user_games ON user_games.game_id = games.id
                    JOIN users ON users.id = user_games.user_id
                    WHERE users.id = $1
                    AND games.name = $2
                    AND overall_skill = $3
                    AND offensive_skill = $4
                    AND defensive_skill = $5
                    AND aggression = $6;`;
    const sqlValues = [req.query.id, req.query.game, req.query.overall, req.query.offensive, req.query.defensive, req.query.aggression];
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