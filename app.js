const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js") //Local function

const listItems = ["To Do List"];
const workItems = [];

const app = express();
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , (req , res)=>{
    let day = date.getDate();
    res.render('list' , {
        title : day ,
        listItems : listItems
    });
});

app.post("/" , (req , res)=>{
    let item = req.body.itemName;
    if (req.body.submitButton === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        listItems.push(item);
        res.redirect("/");
    }
});

app.get("/work" , (req , res)=>{
    res.render('list' , {
        title: "Work" ,
        listItems: workItems
    });
});

app.get("/about" , (req, res)=>{
    res.render("about");
});


app.listen(5000 , ()=>{
    console.log("Server is open in 5000 port");
});