const express = require('express');
const flowManagement = require('./flowManagement');
const v1 = express.Router();

v1.get('/agents', (request, res) => {
    flowManagement
      .getAgents(request)
      .then(function (data) {
        res.json(data)
      })
      .catch(function (err) {
        res.json(err)
      })
  })

  v1.get('/agent/listings', (request, res) => {
    flowManagement
      .getPropertyListingsByAgent(request)
      .then(function (data) {
        res.json(data)
      })
      .catch(function (err) {
        res.json(err)
      })
  })

  v1.get('/org/listings', (request, res) => {
    flowManagement
      .getPropertyListingsByOrg(request)
      .then(function (data) {
        res.json(data)
      })
      .catch(function (err) {
        res.json(err)
      })
  })


  module.exports = v1


