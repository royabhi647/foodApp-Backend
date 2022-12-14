const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.static('public/build'));
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());


const userRouter = require("./Routers/userRouter");
const planRouter = require("./Routers/planRouter");
const reviewRouter = require("./Routers/reviewRouter");
const bookingRouter = require('./Routers/bookingRouter');

app.use("/user",userRouter);
app.use("/plan",planRouter);
app.use("/review",reviewRouter);
app.use("/booking",bookingRouter);


const port = process.env.PORT || 5000;
app.listen(port);

// (async function createUser(){
//     let user = {
//         name: "Krishna",
//         email: "krishna@gmail.com",
//         password: "123456789",
//         confirmPassword: "123456789"
//     };
//     let data = await userModel.create(user);
//     console.log(data);
// })();