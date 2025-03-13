// const express = require("express");
// const { isEmpty } = require("lodash");

// const app = express();

// app.use(express.json());

// const middleware = (req, res, next) => {
//   console.log(`Method : ${req.method}`);
//   console.log(`url : ${req.originalUrl}`);

//   const { userName, password } = req.body;
//   if (isEmpty(userName) && isEmpty(password)) {
//     res.status(400).send("Please provide userName and password");
//   } else {
//     next();
//   }
// };

// const login = (req, res) => {
//   const { userName, password } = req.body;
//   res.status(200).send({
//     method: req.method,
//     url : req.originalUrl,
//     userName,
//     password,
//   });
// };
// app.post("/login", middleware, login);

// app.listen("8080", () => {
//   console.log("Port 8080 is up and listening");
// });

console.log("HI");
const array = [1, 2, 3, 4, 5, 6, 2, 4, 5, 6, 2, 6, 2, 3, 2, 1, 2];
const target = 6;

const pair = [];

for (let i = 0; i < array.length; i++) {
  const item = array[i];
  const compliment = target - item;
  const isInArray = array.indexOf(compliment);

  if (isInArray !== -1) {
    pair.push([item, compliment]);

    let index = array.indexOf(compliment);
    while (index !== -1) {
      array.splice(index, 1);
      index = array.indexOf(compliment);
    }
  }
}

console.log(pair)
