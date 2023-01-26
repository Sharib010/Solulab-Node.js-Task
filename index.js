const express = require('express')
const dotenv = require("dotenv");
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;

require('./DB/db')
const routes = require("./router/routes");
app.use("/", routes);


app.listen(PORT, ()=>{
    console.log(`Server running at Port ${PORT}`);
})