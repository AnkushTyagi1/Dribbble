const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const methodOverride=require("method-override");

const{v4:uuidv4}=require('uuid');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"alice",
        content:"A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order"
    },
    {
        id:uuidv4(),
        username:"bob",
        content:"A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order"
    },
    {
        id:uuidv4(),
        username:"adam",
        content:"A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order A blog (a truncation of weblog[1] is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order"
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("show.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id!==p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("listening port 8080");
})