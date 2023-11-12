//creating a router file 
//under the server directory we make a new folder name router and make new file auth-server.js
//server->router->authserver-router.js
const express=require("express");//importing express
const router=express.Router(); //caling express.router class
const {home,register}=require("../contollers/auth-contollers")
// we create a router here 
router.get("/kaif").get(home);
router.route("/register").get(register)

//exporting the router
module.exports=router