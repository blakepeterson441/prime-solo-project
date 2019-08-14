
const express = require('express');
require('dotenv').config();
const pool = require('./modules/pool');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const getSkillsRouter = require('./routes/getSkills.router');
const getFriendsRouter = require('./routes/getFriends.router');
const getRequestsRouter = require('./routes/getRequests.router');
const setSkillsRouter = require('./routes/setSkills.router');
//const getPlayersRouter = require('./routes/getPlayers.router')

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
app.use('/api/skills', getSkillsRouter);
app.use('/api/friends', getFriendsRouter);
app.use('/api/friends/pending', getRequestsRouter);
app.use('/api/skills/set', setSkillsRouter);
//app.use('/api/players', getPlayersRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});