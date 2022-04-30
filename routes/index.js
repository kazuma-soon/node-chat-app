const express = require('express');
const router = express.Router();

// pg -->
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  database: 'node_chat_app',
  port: 5432,
})
client.connect()
// <--pg

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Top | NodeChatApp' });
});

router.post('/', (req, res, next) => {
  console.log('post called')
})

module.exports = router;
