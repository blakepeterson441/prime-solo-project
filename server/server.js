
const express = require('express');
require('dotenv').config();
const pool = require('./modules/pool');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const { rejectUnauthenticated } = require('./modules/authentication-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

app.get('/skills', (req, res) => {
  console.log('get server', req.query.game);
  const sqlText = `SELECT users.username, games.name, user_games.overall_skill, user_games.offensive_skill, user_games.defensive_skill, user_games.aggression
                    FROM games
                    JOIN user_games ON user_games.game_id = games.id
                    JOIN users ON users.id = user_games.user_id
                    WHERE games.name = $9
                    AND overall_skill BETWEEN $1 AND $2
                    AND offensive_skill BETWEEN $3 AND $4
                    AND defensive_skill BETWEEN $5 AND $6
                    AND aggression BETWEEN $7 AND $8;`
  const sqlValues = [Number(req.query.overall)-2, Number(req.query.overall)+2, Number(req.query.offensive)-2, Number(req.query.offensive)+2, Number(req.query.defensive)-2, Number(req.query.defensive)+2, Number(req.query.aggression)-2, Number(req.query.aggression)+2, req.query.game]
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

app.get('/friends', rejectUnauthenticated, (req, res) => {
  console.log('/friends', req.user);
  const sqlText = `(select username, friends.user_id_two as friend_ID from "users" 
                        join friends on friends.user_id_two = "users".id where 
                        friends.user_id_one = $1 and approved = 'true')
                        union
                        (select username, friends.user_id_one as friend_ID from 
                        "users" join friends on friends.user_id_one = "users".id 
                        where friends.user_id_two = $1 and approved = 'true');`
  const sqlValues = [req.user.id]
  pool.query(sqlText, sqlValues)
  .then(response => {
    res.send(response.rows)
  })
  .catch(error =>{
    console.log('error getting friends', error);
    res.sendStatus(500);
  })
});

app.get('/friends/pending', rejectUnauthenticated, (req, res) => {
  console.log('/friends', req.user);
  const sqlText = `(select username, friends.user_id_two as friend_ID from "users" 
                        join friends on friends.user_id_two = "users".id where 
                        friends.user_id_one = $1 and approved = 'false')
                        union
                        (select username, friends.user_id_one as friend_ID from 
                        "users" join friends on friends.user_id_one = "users".id 
                        where friends.user_id_two = $1 and approved = 'false');`
  const sqlValues = [req.user.id]
  pool.query(sqlText, sqlValues)
    .then(response => {
      res.send(response.rows)
    })
    .catch(error => {
      console.log('error getting friends', error);
      res.sendStatus(500);
    })
});

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
