const express = require("express");
const app = express();

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "Yash" || password != "pass"){
        res.status(403).json({
            msg: "Wrong credentials"
        });
    }else{
        next();
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Invalid!!! Not a human 👽"
        });
    }else{
        next();
    }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware,  (req, res) => {
    
    res.json({
        msg: "health is fine"
    })
})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
})