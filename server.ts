// import dependencies
// use middlewares, routes
// listen to app on a particular port

const dotenv = require('dotenv');
dotenv.config();
import express = require('express');

const PORT:number = parseInt(process.env.PORT as string) || 8080;
// javascript
const app = express();

app.get('/', (req:express.Request, res:express.Response) => {
    res.send({status:"Ok"})
})

app.listen(PORT, () => {
    console.log(`Server Started On port http://localhost:${PORT}`)
})

// typescript 
// using classes everywhere.
// app class and then we will create an object out it and then usko use krenge.