import express from 'express';
import router from './routes/router.js';
import { connectToDatabase } from './config/dbConnect.js';
const app = express();

console.log(router);
// app.use('/', router);


app.listen(3000, ()=>{
    console.log(`server is listen at port : 3000`);
    connectToDatabase();
});


//file :-
/*
M:- Model
V:- View
C:- Controller

C:- create
R:- read
U:- Update
D:- Delete

*/