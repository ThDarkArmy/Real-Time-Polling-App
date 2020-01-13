const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Pusher = require('pusher')
const Vote = require('../models/vote')

var pusher = new Pusher({
  appId: '930554',
  key: 'c40f91980f867fcf1534',
  secret: 'a4820047b9b11b1a45e8',
  cluster: 'ap2',
  encrypted: true
});

router.get('/', (req, res)=>{
    Vote.find().then(votes => res.json({success: true,
    votes: votes
    }))
      
})

router.post('/', (req, res)=>{
  const newVote = {
    os: req.body.os,
    points: 1
  }

  new Vote(newVote).save().then(vote=>{
    pusher.trigger('os-poll', 'os-vote', {
      points: parseInt(vote.points),
      os : vote.os
    });
  })
    
    
    res.json({success: true, message: "Thanks for voting!"})
})

module.exports = router