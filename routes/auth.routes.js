const express = require('express')
const router = express.Router()
const auth = require('./../logic/auth')

router.post('/user', auth.user)

module.exports = router