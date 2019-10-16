const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = 4444;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", express.static("View"))

app.post("/", (req,res)=> {
    const email = req.body.email;
    const pass = req.body.password;
    const saltRounds = 10;

    // res.send(`<h2>${pass}</h2>`);

    bcrypt.genSalt(saltRounds, (err,salt)=> {
        bcrypt.hash(pass, salt, (err,hash)=> {
            res.send(`<h2>${pass}</h2><br>${hash}`);
        })
    })
})

app.listen(port, ()=> {
    console.log("Server started");
})