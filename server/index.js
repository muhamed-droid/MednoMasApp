const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());

//Routers 

const productsRouter = require ('./routes/Products');

app.use("/products", productsRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
  }).catch((error) => {
    console.error('Error syncing database:', error);
  });



