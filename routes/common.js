const express = require('express')
const router = express.Router()

const common = require('../controllers/commonlogin')

router.post('/signup', common.Signup)
router.post('/login', common.Login)

module.exports = router