const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('GET requests server', req.user);
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

module.exports = router;