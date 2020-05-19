const express = require('express');

const routes = require ('./routes');

const app = express();
const path = require('path');

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3000);