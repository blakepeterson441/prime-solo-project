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
                    WHERE games.name = $9
                    AND overall_skill BETWEEN $1 AND $2
                    AND offensive_skill BETWEEN $3 AND $4
                    AND defensive_skill BETWEEN $5 AND $6
                    AND aggression BETWEEN $7 AND $8;`
  const sqlValues = [Number(req.query.overall)-2, Number(req.query.overall)+2, Number(req.query.offensive)-2, 
                      Number(req.query.offensive)+2, Number(req.query.defensive)-2, Number(req.query.defensive)+2, 
                      Number(req.query.aggression)-2, Number(req.query.aggression)+2, req.query.game]
  pool.query(sqlText, sqlValues)
    .then(response => {
      res.send(response.rows);
    })
    .catch(error => {
      console.log('error making skills get', error);
      res.sendStatus(500);
    }
  );
});

module.exports = router;