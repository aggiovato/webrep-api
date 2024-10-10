const express = require("express");
const morgan = require("morgan");

const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/webs", require("./routes/webs"));

// starting the server
const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`Server on route: http://localhost:${PORT}`);
});
