const express = require('express');
const knex = require('knex');
const pg = require('pg');

const app = express();


const postgres = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      },
    searchPath: ['knex', 'public'],
});

app.get('/profile', (req,res)=> {
const user = {
name:'sally',
hobby:'soccer'
}
res.send(user);
})

app.get('/response', async function (req,res){
    const myres = await postgres.select('*').from('test')
    res.send(myres);
})


app.get('/', (req,res)=> {
res.send("Getting root");
})

app.listen(process.env.PORT);