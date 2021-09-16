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
  //GET USER ITEMS
  router.get('/useritems', (req, res) => {

    const query = `SELECT *
    FROM "user"
    JOIN "golf club"
      ON "user"."id" = "golf club"."userid"
    WHERE "user"."id" = $1;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('GET User Item has error', err);
        res.sendStatus(500)
      })
  
  });
  //GET shopping cart re-render inside shopping cart
  router.get('/shoppingcart', (req, res) => {

 const query = `SELECT 
  "shopping cart"."id" as "cartid",
  "golf club"."id" as "clubid",
  "golf club"."clubtype" as "clubtype", 
  "golf club"."brand" as "brand",
  "golf club"."description" as "description", 
  "golf club"."price" as "price", 
  "golf club"."image_path" as "image"
  FROM "golf type"
  JOIN "golf club"
      ON "golf club"."clubtype" = "golf type"."club_type"
  JOIN "shopping cart"
  ON "shopping cart"."item_id" = "golf club"."id"
  WHERE "shopping cart"."user_id" = $1
  GROUP BY "clubtype", "brand", "image", "description", "price", "clubid", "cartid";`;

  pool.query(query, [req.user.id])
  .then(result => {
    console.log('result', result)
    res.send(result.rows)
  }).catch(error => {
    console.log('Details GET error', error)
    res.sendStatus(500)
  });
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
      ON "golf club"."clubtype" = "golf type"."club_type"
    WHERE "golf club"."id" = $1
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

  router.get('/clubtype', (req, res) => {
    const clubId = [req.params.id];
    const query = `SELECT 
    "golf club"."club_type" as "clubtype", 
    "golf club"."brand" as "brand",
    "golf club"."description" as "description", 
    "golf club"."price" as "price", 
    "golf club"."image_path" as "image"
    FROM "golf type"
    JOIN "golf club"
      ON "golf club"."clubtype" = "golf type"."club_type"
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

//POST CLUB to shopping cart
router.post('/', (req, res) => {
  console.log('post', req.body);
  let query = `INSERT INTO "shopping cart" ("item_id", "user_id")
               VALUES ($1, $2)`;
  pool.query(query, [req.body.clubid, req.user.id])
  .then( result => {
    res.sendStatus(200);
  }).catch(err => {
    console.log('POST has Error',err);
    res.sendStatus(500);
  })
});

//POST NEW CLUB to homepage
router.post('/newGolfClub', (req, res) => {
  console.log('Am i being posted', req.body);
  const query = `
  INSERT INTO "golf club" ("clubtype", "userid", "brand", "image_path", "description", "price")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`

  pool.query(query, [req.body.clubtype, req.user.id, req.body.brand, req.body.image_path, req.body.description, req.body.price])
  .then(result => {
    console.log('New Club Id:', result.rows[0].id); //ID IS HERE!
      res.sendStatus(201);
    }).catch(err => {
      console.log('POST addNewClub Error',err);
      res.sendStatus(500)
    })
  });

  
  //DELETE from shopping cart
  router.delete('/details/:id', (req, res) => {
    console.log('delete me', req.params.id);
    let id = req.params.id;
    let query = `
      DELETE FROM "shopping cart"
      WHERE "id" = $1
    `;
  
    pool.query(query, [id])
      .then(result => {
        console.log('Delete results', result)
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('DELETE route error', error)
        res.sendStatus(500);
      })
  });

  

  module.exports = router;