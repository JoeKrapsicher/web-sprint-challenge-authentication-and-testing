// do not make changes to this file
const router = require('express').Router();
const jokes = require('./jokes-data');

router.get('/', (req, res) => {
  console.log("jokes firing")
  res.status(200).json(jokes);
});



module.exports = router;
