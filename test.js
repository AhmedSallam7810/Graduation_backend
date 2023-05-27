const Express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.listen(8001, () => {
  console.log("helllo");
});

app.get("/", (req, res) => {
  res.cookie("userjwt", 1234);
  res.send("hhhhhhh");
});
