
const express = require('express');
require('dotenv').config();
const pool = require('./modules/pool');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

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
  console.log('get server', Number(req.query.offensive)+2);
  const sqlText = `SELECT users.username, user_games.overall_skill, user_games.offensive_skill, user_games.defensive_skill, user_games.aggression FROM user_games
            JOIN users ON users.id = user_games.user_id
            WHERE overall_skill BETWEEN $1 AND $2
            AND offensive_skill BETWEEN $3 AND $4;`
  const sqlValues = [Number(req.query.overall)-2, Number(req.query.overall)+2, Number(req.query.offensive)-2, Number(req.query.offensive)+2]
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

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
