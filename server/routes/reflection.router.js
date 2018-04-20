const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', function(req,res){
    console.log(req.body);
    let queryText = `INSERT INTO "reflection"("topic", "description") VALUES ($1,$2)`;
    pool.query(queryText, [req.body.topic, req.body.reflection])
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((error)=>{
            console.log('an error in reflection.router in post ', error);
            res.sendStatus(500);
        })
})

router.get('/', function(req,res){
    console.log('in router get');
    let queryText = `SELECT * FROM "reflection" ORDER BY id;`
    pool.query(queryText)
        .then((response)=>{
            res.send(response.rows);
        })
        .catch((error)=>{
            console.log('an error in router get ', error);
            res.sendStatus(500);
        })
})

module.exports = router;