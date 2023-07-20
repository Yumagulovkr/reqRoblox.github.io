const express = require("express") // This is how you load modules in Node JS
const app = express() // Initialize Express

app.get("/", (req, res) => {
    res.send("Express JS server example") // The information it sends to someone who opens the website
})

app.listen(3000)
