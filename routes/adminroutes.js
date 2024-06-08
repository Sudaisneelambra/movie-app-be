    const express = require('express')
    const router = express.Router()
    const upload = require('../utils/multer')

    const admin = require('../controllers/admincontroller')

    router.post('/addCard',upload.single('image'), admin.addcard)
    router.delete('/delete/:id',admin.deleteCard)

    module.exports = router