const express=require("express"); //importing  express
const app=express()//calling express by calling express function
const router=require('./router/auth-router'); //importing route files  which were are created routed pages 
const connectDb=require("./utils/db") //importing the databse connection file 
app.use("/api/auth",router); //using route file and passing route constant to it 


app.get("/",(req,res)=>{ //creating page by / this req and response 
 res.status(200).send("welcome to kaif shaikh siddique"); //here we getting the response 
}); 
//creating one more route  or path or page 
app.get("/register",(req,res)=>{ //creating page by / this req and response 
    res.status(200).send("welcome to register page zara "); //here we getting the response 
   });
const PORT=5000; //creating the port 
//if every thing is fine calling coonectdb function with listen() port here 
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on the port ${PORT}`); //here we liseting the port 
    })
})
