//Express Modules
const express = require ('express');
const app = express();
const {success,failure} = require('./util/common');
const ProductRouter = require('./routes/Product');
const authRouter = require('./routes/Auth');
const databaseConnection = require('./config/database');

const dotenv = require('dotenv').config();
const cors =require('cors');


app.use(cors({origin:'*'}));
app.use(express.json());


//main route
app.use('/products',ProductRouter);
app.use('/user',authRouter);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ message: 'Invalid JSON format' });
  }
  next();
});



databaseConnection(()=>{
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
})