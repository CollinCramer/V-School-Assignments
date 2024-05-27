const express = require("express")
const supersRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const d2Supers = [
    {name: "well of radiance", type: "support", class: "warlock", element: "solar"},
    {name: "dawnblade", type: "ad clear", class: "warlock", element: "solar"},
    {name: "nova bomb", type: "dps", class: "warlock", element: "void"},
    {name: "nova warp", type: "ad clear", class: "warlock", element: "void"},
    {name: "chaos reach", type: "dps", class: "warlock", element: "arc"},
    {name: "stormtrance", type: "ad clear", class: "warlock", element: "arc"},
    {name: "winters wrath", type: "ad clear", class: "warlock", element: "stasis"},
    {name: "needlestorm", type: "dps", class: "warlock", element: "strand"},
    {name: "arc staff", type: "ad clear", class: "hunter", element: "arc"},
    {name: "gathering storm", type: "dps", class: "hunter", element: "arc"},
    {name: "golden gun", type: "dps", class: "hunter", element: "solar"},
    {name: "blade barrage", type: "dps", class: "hunter", element: "solar"},
    {name: "shadow shot", type: "support", class: "hunter", element: "void"},
    {name: "spectal blades", type: "ad clear", class: "hunter", element: "void"},
    {name: "silence and squall", type: "ad clear", class: "hunter", element: "stasis"},
    {name: "silkstrike", type: "ad clear", class: "hunter", element: "strand"},
    {name: "sentinal shield", type: "ad clear", class: "titan", element: "void"},
    {name: "ward of dawn", type: "support", class: "titan", element: "void"},
    {name: "fist of havoc", type: "ad clear", class: "titan", element: "arc"},
    {name: "thundercrash", type: "dps", class: "titan", element: "arc"},
    {name: "hammer of sol", type: "ad clear", class: "titan", element: "solar"},
    {name: "burning maul", type: "dps", class: "titan", element: "solar"},
    {name: "glacial quake", type: "ad clear", class: "titan", element: "stasis"},
    {name: "blade fury", type: "ad clear", class: "titan", element: "strand"}
]

supersRouter.use("/", (req, res, next) => {
    console.log("The middleware is firing")
    next()
})
// // get all
supersRouter.get("/", (req, res) => {
    res.send(d2Supers)
})


module.exports = supersRouter