const express = require('express');
const { TransactionsData } = require('./transaction')
const apiRouter = express.Router(); //create Rounter


apiRouter.get("/Transactions", (req, res) => {
    const transaction = TransactionsData.getTransactions();
    res.json({
        transaction,
    });
});

apiRouter.get("/transaction", (req, res) => {
    const transaction = TransactionsData.getTransactions(0);
    res.json({
        transaction,
    });
});


apiRouter.get("/Dino", (req, res) => {
    res.send("API ROUNTER : Hi /Dino ");
});

module.exports = { apiRouter };