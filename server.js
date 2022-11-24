const express = require('express');

const app = express();

app.get('/profile', (req,res)=> {
const user = {
name:'sally',
hobby:'soccer'
}
res.send(user);
})


app.get('/', (req,res)=> {
res.send("Getting root");
})

app.listen(PORT);