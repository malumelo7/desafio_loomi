
import { swaggerDocument } from "./swagger";

const express = require('express')
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express')
const app = express();

//Conect to MongoDB
const dbURI = 'mongodb+srv://malu:mAlu1234@loomichallenge.n5ym0.mongodb.net/loomiChallenge?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
