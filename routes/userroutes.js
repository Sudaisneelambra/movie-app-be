const express = require('express')
const router = express.Router()

const tokenCheck = require('../middlewares/tokenCheck')

const user = require('../controllers/userController')

router.get('/allCards',tokenCheck, user.getallCards)
router.post('/singlecard',tokenCheck, user.getsingleCard)

module.exports = router




