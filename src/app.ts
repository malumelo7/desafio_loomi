
import { swaggerDocument } from "./swagger";
const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

const userRouter = require('./routes/userRoutes')
const clientRouter = require('./routes/clientRoutes')
const clientRequestRouter = require('./routes/clientRequestRoutes')
const productRouter = require('./routes/productRoutes')
const loginRouter = require('./routes/loginRouter')

const app = express();

app.use(express.json());

app.use(cors())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/user', userRouter)
app.use('/client', clientRouter)
app.use('/clientRequest', clientRequestRouter)
app.use('/product', productRouter)
app.use('/login', loginRouter)


app.listen(process.env.PORT || 4321, ()=>{
  console.log("Server listening on port 4321...")
})

