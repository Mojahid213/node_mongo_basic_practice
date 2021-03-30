const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Horray!! I have started node')
}
)





app.listen(3000,()=>console.log('port 3000 started'))