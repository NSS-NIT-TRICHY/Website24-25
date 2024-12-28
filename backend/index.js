import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.url({ extended}))

app.use(cors());
app.listen(process.env.PORT, ()=> {
    console.log('Server is running on port 3000');
 });

app.get('/', (req,res)=> {
    res.send('Hello, World!');
});
