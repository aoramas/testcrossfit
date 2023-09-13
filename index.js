const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { config } = require("./config/config");

dotenv.config();
const app = express();

const routerApi = require("./routes");

const port = config.PORT;

app.use(cors());
app.use(express.json());

app.use('/docs',express.static(__dirname + '/doc'));

routerApi(app);

app.listen(port, () => {
  console.log("Port ==> ", port);
});
