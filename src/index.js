const express = require("express")
const db = require("../db.json")
const fs = require("fs")
const cors = require("cors")
const app = express();
app.use(cors())

app.get("/",(req,res) => {
    console.log(req.method, req.url)
    res.write("hello, i am ishan")
    res.end();
})

app.get("/posts", (req,res)=> {
    res.send(db.posts)
})

app.get("/posts/:id", (req,res) => {
    let id = req.params.id
    let numId = Number(id);
    let post = db.posts.find((post) => post.id === numId);
    if(post) {
        res.send(post);
    } else {
        res.send(404).send(`Post with ID: ${id} not found`);
    }
     console.log(req.method, req.url);
    res.send(db.posts)
})

app.post("/posts", (req,res) => {
    console.log('body',res)
    // db.posts.push(req.body);
    fs.writeFile("./db.json", JSON.stringify(db), "utf-8", () => {
        res.status(201).send(db.posts)
    })
    res.send("user added successfully")
})

app.delete("/posts/:id", (req,res) => {
    let id = req.params.id;
    let numId = Number(id);
    let posts = db.posts.filter((post) => post.id !== numId) ;
    db.posts = posts;

    fs.writeFile("./db.json", JSON.stringify(db), "utf-8", () => {
        res.send(db.posts)
    })
    res.send("Deleted")
})

app.patch("")

app.listen(8282, () => {
    console.log("Listening on http://localhost:8282/")
})