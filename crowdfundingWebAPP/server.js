const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.sendFile(path.join('crowdfundingWebApp',"index.html"));
});


app.listen(8081,()=>{
    console.log("Running in 8081");
});