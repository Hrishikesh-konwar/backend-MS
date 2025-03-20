const express = require("express");
const mongoose = require('mongoose')

const config = require('config');
const v1Routes = require('./modules/v1/routes');
const v2Routes = require('./modules/v2/routes');
const { authenticateUser } = require("./middleware/auth");
const users = require('./modules/v2/users/routes/index');


const app = express();
app.use(express.json());

require('./startup/prod')(app);

// mongoose.connect("mongodb://localhost:27017/nucleus") //process.env.MONGO_DB_URL)   //'mongodb://localhost:27017/nucleus')
// .then(()=> console.log("connected to MongoDb"))
// .catch(err=>console.log("Error connecting to MongoDb", err))


app.use('/api/v1',authenticateUser, v1Routes);
app.use('/api/v2',authenticateUser, v2Routes);
app.use('/user', users)

app.get('/health-check',(req,res)=>{
  res.send({
    message: `Server is up and running!`,
  })
});

app.use('/', (req,res)=>{
  res.send("Welcome to Nebula, Lets Start")
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log({
    message: `Server is listening on ${PORT}!!!!!!!!!`,
    label: "server start",
  });
});
