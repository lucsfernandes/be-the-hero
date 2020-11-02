const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //Utilizado para restringir quem pode acessar a nossa API. No momento está como default ALL
app.use(express.json());
app.use(routes);


app.listen(3333);

