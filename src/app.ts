
import { swaggerDocument } from "./swagger";

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(process.env.PORT || 4321, ()=>{
  console.log("Server listening on port 4321...")
})

