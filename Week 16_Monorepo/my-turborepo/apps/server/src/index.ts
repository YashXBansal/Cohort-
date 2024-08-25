import express, {Request, Response} from "express";
import {BACKEND_URL} from "@repo/common/config";

const app = express();
app.get("/", (req, res) => {
    res.json({ 
        message: "Hello World"
    })
})
console.log(BACKEND_URL)
app.listen(3000);