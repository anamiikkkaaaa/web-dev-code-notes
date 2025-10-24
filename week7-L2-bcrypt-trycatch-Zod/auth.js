const jwt = require("jsonwebtoken");
const JWT_SECRET = "akoqbwdua";

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
    console.log("auth function passed");
}

module.exports = {auth, JWT_SECRET};