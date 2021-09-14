const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET CLUBS
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

  //GET ALL CLUB DETAILS
  router.get('/details/:id', (req, res) => {
    const clubId = [req.params.id];
    const query = `SELECT 
    "golf club"."id" as "clubid",
    "golf club"."clubtype" as "clubtype", 
    "golf club"."brand" as "brand",
    "golf club"."description" as "description", 
    "golf club"."price" as "price", 
    "golf club"."image_path" as "image"
    FROM "golf type"
    JOIN "golf club"
      ON "golf club"."id" = "golf type"."id"
    WHERE "golf type"."id" = $1
    GROUP BY "clubtype", "brand", "image", "description", "price", "clubid";`;
  
      pool.query(query, clubId)
      .then(result => {
        console.log('result', result)
        res.send(result.rows)
      }).catch(error => {
        console.log('Details GET error', error)
        res.sendStatus(500)
      });
  });

  router.get('/clubtype/:id', (req, res) => {
    const clubId = [req.params.id];
    const query = `SELECT 
    "golf club"."clubtype" as "clubtype", 
    "golf club"."brand" as "brand",
    "golf club"."description" as "description", 
    "golf club"."price" as "price", 
    "golf club"."image_path" as "image"
    FROM "golf type"
    JOIN "golf club"
      ON "golf club"."id" = "golf type"."id"
    WHERE "golf type"."clubtype" = $1
    GROUP BY "clubtype", "brand", "image", "description", "price";`;
  
      pool.query(query, clubId)
      .then(result => {
        console.log('result', result)
        res.send(result.rows)
      }).catch(error => {
        console.log('Details GET error', error)
        res.sendStatus(500)
      });
  });

  //POST CLUB
  router.post('/', (req, res) => {
    console.log('post', req.body);
    let query = `INSERT INTO "shopping cart" ("item_id", "user_id")
                 VALUES ($1, $2)`;
    pool.query(query, [req.body.item_id, req.user.id]).then( result => {
      res.sendStatus(200);
    }).catch(err => {
      console.log('POST has Error',err);
      res.sendStatus(500);
    })
  });

  //DELETE
  router.delete('/details/:id', (req, res) => {
    console.log('delete me', req.params.id);
    let id = req.params.id;
    let query = `
      DELETE FROM "shopping cart"
      WHERE "id" = $1
    `;
  
    pool.query(query, [id])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('DELETE route error', error)
        res.sendStatus(500);
      })
  });

  

  module.exports = router;