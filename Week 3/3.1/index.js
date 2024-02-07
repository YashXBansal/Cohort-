const express = require("express");
const app = express();

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "Yash" || password != "pass"){
        res.status(403).json({
            msg: "Your kidney is not fine",
        });
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){

        res.status(400).json({
            msg: "Your kidney is not fine",
        });
    }

    res.json({
        msg: "Your kidney is fine ♥"
    })
})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
})