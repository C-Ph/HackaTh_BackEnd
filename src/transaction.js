
class Transactions {
    Transactions = []

    constructor(){
        this.Transactions = [
            {
                type : "income",
                category : "salary",
                amount : 10000,
            },
        ];
    }
    getTransactions(){
        return this.Transactions;
    }

    getTransaction(){
        return this.getTransactions[index];
    }
}

const TransactionsData = new Transactions()

//ส่งออกไป
module.exports = {
    TransactionsData,
};