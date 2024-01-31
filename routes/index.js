const { Router } = require('express')
const { SuccessResponseObject } = require('../common/http')
const demo = require('./demo.route')

const r = Router()

r.use('/demo', demo)

r.get('/', (req, res) => {
  return res.json({ message: 'express vercel boiler plate' })
})

module.exports = r
