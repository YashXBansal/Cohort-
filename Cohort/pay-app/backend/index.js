const express = require("express");
const PORT = 3000;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const rootRouter = require("./Routes/index");


app.use('/payment', rootRouter )

app.listen(PORT, (res) => {
  console.log(`Listening on ${PORT}`);
});
