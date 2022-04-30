const express = require('express');
const router = express.Router();

require('dotenv').config();
// pg -->
const { Client } = require('pg')
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
  // user: 'postgres',
  // database: 'node_chat_app',
  // port: 5432,
})
client.connect()
// <--pg

/* GET home page. */
router.get('/', (req, res, next) => {
  client
    .query('SELECT * FROM chats LIMIT 20')
    .then(results => {
      res.render('index.ejs', { 
	title: 'Top | NodeChatApp',
        comments: results.rows,
      });
    })
    .catch(err => {
      console.error(err);
      res.render('index.ejs', { title: 'Top | NodeChatApp' });
    })
});

router.post('/', (req, res, next) => {
  console.log('post called')
})

module.exports = router;
