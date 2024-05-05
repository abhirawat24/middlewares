const express = require("express");

const jwt = require("jsonwebtoken");
const jwtpassword ="123456";

const app = express();

const ALL_USERS = [
  {
    username:"abhishek@gmail.com",
    password:"1234",
    name:"Abhishek Rawat"
  },
  {
    username:"ashish@gmail.com",
    password:"123123",
    name:"Ashish Karakoti",
  },{
    username:"nishant@gmail.com",
    password:"321321",
    name:"Nishant Kumar",
  }, 
];

function userExists(username, password){
  
}
app.post("/signin", function(req, res){
  const username: req.body.username;
  const password: req.body.password;

  if(!userExists(username,password)){
    return res.status(403).json({
      msg:"user dosen't exist in our DB",
      
    });
  }
  var token =jwt.sign({username:username},"shhhh");
  return res.json({
    token,
    
  });
});

app.get("/users",function (req, res){
  const token =req.headers.authorization;
  try{
    const decoded =jwt.verify(token,jwtpassword);
    const username =decoded.username;
  }
  catch (err){
    return res.status(401).json({
      msg:"invalid token",
    });
  }
});
app.listen(3000)
