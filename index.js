const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const port = 7400;

app.use(express.static(path.join(__dirname, "static")));
app.use(methodOverride('_method'));
app.use(express.json());

names = ["ravi", "ramji", "addd", "adnasdkjas"];

app.get('/name',(req,res)=>{
    res.json(names);
})

app.patch('/name', (req, res)=>{
    const {value} = req.body;
    names.push(value);
    res.send({
        'success':true
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})