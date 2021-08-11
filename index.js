const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected!!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/user", require("./routes/user"));
app.listen(5000);
