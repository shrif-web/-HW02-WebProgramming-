const express = require('express');
const app = express();
const PORT = 3000;
var cors = require('cors');
app.use(cors());

app.use(express.static('/home/AHReccese/hw2_web/back/public'));

//  app.all("*", (req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, PATCH, OPTIONS");
//  res.header("Access-Control-Allow-Headers", "*");
//  res.header("Access-Control-Allow-Credentials", true);
//  next();
//  });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

