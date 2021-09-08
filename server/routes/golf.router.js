const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

    const query = `SELECT * FROM "golf club" ORDER BY "clubtype" ASC`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all Golf clubs', err);
        res.sendStatus(500)
      })
  
  });

  router.get('/details/:id', (req, res) => {
    const clubId = req.params.id;
    console.log('params', req.params.id)
    const query = `SELECT 
    "golf club"."clubtype" as "clubtype", 
    "golf club"."description" as "description", 
    "golf club"."price" as "price", 
    "golf club"."image_path" as "image"
    FROM "golf type"
    JOIN "golf club"
      ON "golf club"."clubtype" = "golf type"."club_type"
    WHERE "golf type"."id" = $1
    GROUP BY "clubtype", "image", "description", "price";`;
  
      pool.query(query, [clubId])
      .then(result => {
        console.log('result', result)
        res.send(result.rows)
      }).catch(error => {
        console.log('Details GET error', error)
        res.sendStatus(500)
      });
  })
  module.exports = router;