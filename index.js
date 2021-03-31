const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = ['Fahim','Sukur','Hamim','Fuhad','Sakib','Rakib'];


app.get('/',(req,res)=>{
    const fruit = {
        name:'Apple',
        price:250
    }
    res.send(fruit)
}
)

app.get('/fruits/banana',(req,res)=>{
    res.send({
        fruit:'banana',
        price:200,
        quantity:20
    })
})


app.get('/users/:id',(req,res)=>{
    const Id = req.params.id;
    const name = users[Id];
    res.send({Id,name})
})

//Post request
app.post('/addUser',(req,res)=>{
    const user = req.body;
    res.send(user)
})

app.listen(3000,()=>console.log('port 3000 started'))