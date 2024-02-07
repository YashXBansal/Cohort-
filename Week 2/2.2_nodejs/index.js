const express = require("express");
const app = express();
const port = 3000;
const bodyParse = require('body-parser');

app.get('/backend-api/conversation', (req, res) => {
    res.send("this is the server 3000 and we're currently at /backend-api/conversation ")

})
app.post('/backend-api/conversation', (req, res) => {
    const message = req.query.message;
    console.log(message)
    res.json({
        Question: "What is your name ? "
    })
})

app.use(bodyParse.json());

app.listen(port, () => {
    console.log(`Server is litening on the Port ${port}`)
})