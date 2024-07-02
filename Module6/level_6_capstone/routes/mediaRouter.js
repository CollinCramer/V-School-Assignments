const express = require("express")
const mediaRouter = express.Router()
const Media = require("../models/media.js")

// get all issues

// messing around with try/catch block again
// working in postman. Made new request
mediaRouter.get('/', async (req, res, next) => {
    try {
        const media = await Media.find()
        return res.status(200).send(media)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// ----------------------------------------------------------------------------------------------------

// get media from specific user Id
// working in postman. Made new request

mediaRouter.get("/user", (req, res, next) => {
    Media.find({ user: req.auth._id }, (err, media) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(media)
    })
})
module.exports = mediaRouter

// ----------------------------------------------------------------------------------------------------

// Add new Media
// tested in Postman

mediaRouter.post("/", (req, res, next) => {
    // user is equal to the user._id
    // have to use auth, not user
    req.body.user = req.auth._id
    const newMedia = new Media(req.body)
    newMedia.save((err, savedMedia) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMedia)
    })
})

// ----------------------------------------------------------------------------------------------------

// Delete Media
// tested in postman

mediaRouter.delete("/:mediaId", (req, res, next) => {
    Media.findOneAndDelete(
        { _id: req.params.mediaId, user: req.auth._id },
        (err, deletedMedia) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted: ${deletedMedia.title} from database`)
        }
    )
})

// ----------------------------------------------------------------------------------------------------

// Update Media
// Tested in Postman

mediaRouter.put("/:mediaId", (req, res, next) => {
    Media.findOneAndUpdate(
        { _id: req.params.mediaId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedMedia) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMedia)
        }
    )
})

// ----------------------------------------------------------------------------------------------------

// Filter Media by type
// Tested in Postman
mediaRouter.get("/search/type", (req, res, next) => {
    Media.find({ type: req.query.type }, (err, media) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(media)
    })
})

mediaRouter.put("/upVote/:mediaId", (req, res, next) => {
    console.log(req.params.mediaId)
    Media.findOneAndUpdate(
        { _id: req.params.mediaId },
        {
            $addToSet: { likedUsers: req.auth._id },
            $pull: { dislikedUsers: req.auth._id }
        },
        { new: true },
        (err, updatedMedia) => {
            console.log(err, updatedMedia)
            if (err) {
                res.status(500)
                return next(err)
            }
            console.log(updatedMedia)
            return res.status(201).send(updatedMedia)

        }
    )
})

mediaRouter.put("/downVote/:mediaId", (req, res, next) => {
    Media.findOneAndUpdate(
        { _id: req.params.mediaId },
        {
            $addToSet: { dislikedUsers: req.auth._id },
            $pull: { likedUsers: req.auth._id }
        },
        { new: true },
        (err, updatedMedia) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMedia)
        }
    )
})