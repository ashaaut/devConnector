const express=require('express');
const app=express();
const PORT=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("welcome to devConnector app");
})

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
});