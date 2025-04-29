const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const path=require('path')

//configuration
dotenv.config();

//rest objects
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//
//static files
app.use(express.static(path.join(__dirname,'./client/build')))
//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoutes'))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
//port
const PORT=8000


//listen
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
});