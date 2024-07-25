const express = require('express')
const app = express();
let path=require("path");
let port= 8080;
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));

app.listen(port,()=>{
  console.log("hii");
}) ;
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});






// const {faker}=require('@faker-js/faker');





const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'query',
  password:'ssz@one',

});

app.post('/submit', (req, res) => {
  let {username, email } = req.body;
let ue ={username, email};
console.log(ue.username);
let h= [ue.username,ue.email];

  let q="INSERT INTO user (username , email ) values (?)";
  let bs=[["mohan","fsdfsdf@543216"],["sohan","weyerg@54132654"],["raju","hjfgbdg@6532"]];

bs.push(h);
console.log(bs);


res.send('<a href="http://localhost:8080/"><button>Home</button></a>'+'<a href="http://localhost:8080/login"><button>log in</button></a>')

try{

connection.query(q,[bs[bs.length-1]],
  
   (err, results) =>{

    if(err)throw err
    console.log(results); 
    
  });
} catch (err)  {
  console.log(err);
} })     ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


