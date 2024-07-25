const express = require('express')
const app = express();
var methodOverride = require('method-override')
let path=require("path");
const { v4: uuidv4 } = require('uuid');
let port= 30003;
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({extended:true})) ;
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

let student=[{names:"ramu_kumar",pass:"847204",id:uuidv4()},{names:"mohan_kumar",pass:"47854",id:uuidv4()},{names:"shohan_kumar",pass:"963204",id:uuidv4()}];


app.listen(port,()=>{
  console.log("hii");
}) ;


app.get("/exam", (req, res) => {
 
  res.render("exam.ejs" )
 
}); 


app.get("/form", (req, res) => {
 
  res.render("form.ejs" )
 
});  



app.get("/", (req, res) => {
 
  res.render("index.ejs" , {student})
 
});





app.post("/login", (req, res) => {
  let {user,pass} =req.body;

 let id=uuidv4()
student.push({user,pass,id});
// console.log(student)


  res.redirect("/")
 
});


app.get("/login", (req, res) => {
 
  res.render("add_name.ejs")
 
});




app.get("/:id", (req, res) => {
     let {id}=(req.params)
    
    let sh = student.find((i)=>id===i.id)
   
     res.render("show.ejs" , {sh})});





    app.patch("/:id", (req, res) => {
      let {id}=(req.params)
     let editpass = req.body.pass
     let editid = req.body.id
     let edituser = req.body.names
     let sh = student.find((i)=>id===i.id)
    sh.pass =editpass
    sh.id =editid
    sh.names =edituser
      res.redirect("/")
      
     });


     app.delete("/:id", (req, res) => {
      let {id}=(req.params)
     
     student = student.filter((i)=>id !==i.id)
  
     
      res.send("delete"+'<a href="http://localhost:30003/"><button>Home</button></a>');
     })




     app.get("/:id/edit", (req, res) => {
      let {id} =(req.params);

      let sh = student.find((i)=>id===i.id)
     
   
      res.render("edit.ejs", {sh})});


  
// app.get("/:ram",(req,res)=>
// {let {ram}=req.params
// res.render(ram)
// });

 
  
app.get("/json/:ramu",(req,res)=>
  {let {ramu}=req.params;

const fdata = require('./data.json');
const data = fdata[ramu];


  res.render("json.ejs",{data})
  
  }
  );








 


