const express = require('express');
const router = express.Router();
const {Products} = require("../models");


router.get("/", (req, res) => {
    res.json("Hello, everything is working well!");
});

router.post("/", async (req, res) => {
   const product = req.body;
    await Products.create(product);
    res.json(product);
});

module.exports = router;