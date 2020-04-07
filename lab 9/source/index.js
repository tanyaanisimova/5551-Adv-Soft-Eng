const express = require('express')
const app = express()
const port = 3000

const jwt = require('jsonwebtoken');
const fs = require('fs')

app.get('/', (req, res) => res.send('Hello World!'))

// public readme
app.get('/readme', (req, res) => {
    res.json({ "message" : "This is open to the world!" })
})

// print JWT signed with the private key file
app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send(token);
})

// private: only allow authenticated users
app.get('/secret', isAuthenticated, (req, res) => {
    res.json({ "message" : "THIS IS SUPER SECRET, DO NOT SHARE!" })
})

// start application on the specified port
app.listen(port,
    () => console.log(`Simple Express app listening on port ${port}!`))


// verify that the token provided was signed by our private key file
function isAuthenticated(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[0];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');

        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            if (err) {  // not signed by our private key file
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }
            return next();
        });
    } else { // no authorization provided
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
    }
}
