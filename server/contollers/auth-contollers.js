//here making contollers functions 
const home= async (req,res)=>{
     try{
        res
        .status(200)
        .send("hi here is kaif");
     } catch (error){
        console.log(error);
     }
};

//for registation logic
 const register=(req,res)=>{
    res.status(200).send("welcome to registration page kaif shaikh")
}
module.exports={home,register};