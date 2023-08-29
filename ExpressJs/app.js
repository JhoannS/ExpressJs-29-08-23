const express = require("express"); 
const path = require("path")
const app = express();

app.get("/", (req, res)=>{
    // res.send("Hello world")
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.listen(3000, ()=>{
    console.log("el servido esta corriendo perfectamente en el localhost", 3000);
});