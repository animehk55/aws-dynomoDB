const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.send("Hello Express");
});

app.post('/hello', (req, res)=>{
    let body = req.body;
    body.message = "Hello " + body.name + body.email + body.phone;
    console.log(body)

    res.json(body);
    // console.log(body);
})

app.get('*',(req,res)=>{
res.status(404).send('<p>Not found</p>');
});

app.listen(3000, ()=>{
    console.log("Server listening on port 3000!");
})