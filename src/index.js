const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.disable("x-powered-by"); //desactiva cabecera de Express

//settings
const PORT = process.env.PORT || 3000;
app.set("json spaces", 2);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/webs", require("./routes/webs"));

// starting the server
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}/api/webs`);
});
