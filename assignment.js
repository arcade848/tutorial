class bankAccount{
    constructor (accountNumber,accountHolder,balance,transactions){
        this._accountNumber = accountNumber;
        this._accountHolder = accountHolder;
        this._balance = balance;
        this._transactions = transactions;
    }
   get deposit(){
        return `Depositor accountNumber: ${this._accountNumber},Depositor accountHolder: ${this._accountHolder}`;
    }
     get withdraw(){
        return `Withdrawer accountNumber: ${this._accountNumber},Withdrawer accountHolder: ${this._accountHolder}`;
    }
    get getTransaction(){
        return `The transaction details: ${this._transaction}`
    }
}
const myAccount = new bankAccount(0004555678,"Jimoh Idris",5000);
console.log(myAccount.deposit);
//Transcaction details
class transaction{
    constructor(type,amount,timestamp){
        this._type = type;
        this._amount = amount;
        this._timestamp = timestamp;
    }
    get transactionDetails(){
        return `Transaction type: ${this._type}, amount: ${this._amount}, timestamp: ${this._timestamp}`
     }
    
}
const myTransaction = new transaction("Deposition",10000,new Date);
console.log(myTransaction.transactionDetails);