const express = require('express')
const router = express.Router()

const user = require('../controllers/userController')

router.get('/allCards', user.getallCards)
router.post('/singlecard', user.getsingleCard)

module.exports = router




