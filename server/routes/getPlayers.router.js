// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// /**
//  * GET route
//  */
// router.get('/', (req, res) => {
//     console.log('/players', req);
//     const sqlText = `SELECT username from "users"
//                         WHERE id = $1;`
//     const sqlValues = [req.user.id];
//     pool.query(sqlText, sqlValues)
//     .then(response => {
//         res.send(response.rows)
//     })
//     .catch(error =>{
//         console.log('error getting friends', error);
//         res.sendStatus(500);
//   });
// });


// module.exports = router;