const jwt = require("jsonwebtoken");
const JWT_SECRET = "anaiscute";

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        
    }
}

module.exports = {auth, JWT_SECRET};