    const express = require('express')
    const router = express.Router()
    const upload = require('../utils/multer')
    const tokenCheck = require('../middlewares/tokenCheck')

    const admin = require('../controllers/admincontroller')

    router.post('/addCard',tokenCheck,upload.single('image'), admin.addcard)
    router.delete('/delete/:id',tokenCheck,admin.deleteCard)
    router.get('/getCard/:id',admin.getCard)
    router.post('/editCard/:id',tokenCheck,upload.single('image'), admin.editCard)


    module.exports = router

    