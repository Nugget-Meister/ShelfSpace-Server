
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  res.json({ message: 'Get all books' });
});


router.post('/', (req, res) => {

  res.json({ message: 'Create a new book' });
});


module.exports = router;
