const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issues")

// get all issues

// messing around with try/catch block again
// working in postman. Made new request
issueRouter.get('/', async(req, res, next) => {
    try {
        const issue = await Issue.find()
        return res.status(200).send(issue)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// ----------------------------------------------------------------------------------------------------

// get issues from specific user Id
// working in postman. Made new request

issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })

// ----------------------------------------------------------------------------------------------------

// Add new Issue
// tested in Postman

issueRouter.post("/", (req, res, next) => {
    // user is equal to the user._id
    // have to use auth, not user
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })

// ----------------------------------------------------------------------------------------------------

// Delete Issue
// tested in postman

issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueId, user: req.auth._id },
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
      }
    )
  })

  // ----------------------------------------------------------------------------------------------------

// Update Todo
// Tested in Postman

issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId, user: req.auth._id },
      req.body,
      { new: true },
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
  })

// ----------------------------------------------------------------------------------------------------

issueRouter.put("/upVote/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { likedUsers: req.auth._id },
      $pull: { dislikedUsers: req.auth._id }
    },
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

issueRouter.put("/downVote/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { dislikedUsers: req.auth._id },
      $pull: { likedUsers: req.auth._id }
    },
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter