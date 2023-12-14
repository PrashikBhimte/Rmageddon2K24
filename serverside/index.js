import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const server = express();
const port = 4000;

const indData = [];

server.use(bodyParser.urlencoded({ extended:true }));
server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
    res.send("hello");
});

server.post("/data", (req, res) => {
    const result = req.body.key;
    console.log(result);
});

server.listen(port, () => {
    console.log(`Server is running on the port ${port}.`)
});