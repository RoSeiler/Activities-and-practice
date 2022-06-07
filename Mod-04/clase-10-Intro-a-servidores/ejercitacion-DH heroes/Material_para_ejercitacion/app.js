const express = require ("express"); 
const path = require ("path");
const app = express(); 

app.listen(3030,()=>console.log("server running"));

app.use(express.static("public"));

app.get("/home", (req,res)=>{

const pathToAboutHTML = path.join(__dirname,"views/index.html" ) 

   res.sendFile(pathToAboutHTML); 

});    

app.get("/babbage", (req,res)=>{
                                      
    const pathToAboutHTML = path.join(__dirname,"views/babbage.html" ) 

   res.sendFile(pathToAboutHTML); 
                                  
}); 

app.get("/berners-lee", (req,res)=>{

    const pathToAboutHTML = path.join(__dirname,"views/berners-lee.html" ) 

   res.sendFile(pathToAboutHTML)

}); 

app.get("/clarke", (req,res)=>{

    const pathToAboutHTML = path.join(__dirname,"views/clarke.html" ) 

   res.sendFile(pathToAboutHTML)

}); 

app.get("/hamilton", (req,res)=>{

    const pathToAboutHTML = path.join(__dirname,"views/hamilton.html" ) 

   res.sendFile(pathToAboutHTML)

}); 

app.get("/hopper", (req,res)=>{

    const pathToAboutHTML = path.join(__dirname,"views/hopper.html" ) 

   res.sendFile(pathToAboutHTML)

}); 

app.get("/lovelace", (req,res)=>{

    const pathToAboutHTML = path.join(__dirname,"views/lovelace.html" )

   res.sendFile(pathToAboutHTML)

}); 

app.get("/turing", (req,res)=>{

   const pathToAboutHTML = path.join(__dirname,"views/turing.html" )

   res.sendFile(pathToAboutHTML)

}); 