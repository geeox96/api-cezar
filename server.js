const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//mongoose
const options = {
  poolSize: 5,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

mongoose.connect("mongodb+srv://wesource:wesource@cluster0-mg9wh.mongodb.net/apiCezar?retryWrites=true", options);
mongoose.set("useCreateIndex", true);
mongoose.connection.on("error", err => {
  console.log("Erro no banco " + err);
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB conectado");
});

//body-parses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//iniciação app
app.listen(3000, "localhost", () => {
  console.log(`API on`);
});

module.exports = app;

//ROTAS
app.use("/api", require("./src/rotas/empresa"));
