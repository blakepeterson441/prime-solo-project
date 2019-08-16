const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET skills server', req.query.game);
    const sqlText = `SELECT users.id, users.username, games.name, user_games.overall_skill, 
                    user_games.offensive_skill, user_games.defensive_skill, user_games.aggression
                    FROM games
                    JOIN user_games ON user_games.game_id = games.id
                    JOIN users ON users.id = user_games.user_id
                    WHERE games.name = $1
                    AND overall_skill = $2
                    AND offensive_skill = $3
                    AND defensive_skill = $4
                    AND aggression = $5;`


    const sqlValues = [req.query.game, req.query.overall, req.query.offensive, req.query.defensive, req.query.aggression]
    pool.query(sqlText, sqlValues)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('error making user skills get', error);
            res.sendStatus(500);
        }
        );
});

module.exports = router;