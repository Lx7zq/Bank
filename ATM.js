class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor(name,address,phone,email){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    verify(name,address,phone,email){
       if (this.name === name && this.address === address 
        && this.phone === phone && this.email === email){
        return true;
       }else{
        return false;
       }
    }
    getAccount(){
        return this.accounts
    }
    createAccount(bank,accountType){
        return bank.createAccount(accountType) 
    }
}

class Account {
    accountNumber = ""
    balance = 0
    constructor() {
        this.accountNumber = "";
        this.balance = 0;
        this.transactions = [];
        this.customer = null;
      }
    
      deposit(amount) {

      }
      withdraw(amount) {
        
      }
      createTransaction() {

      }
      getTransaction() {
        return this.transactions;
      }
      getBalance() {
        return this.balance;
      }
      getAccountType() {
        return this.accountType;
      }
      getCustomer() {
        return this.customer;
      }
      setCustomer() {
        this.customer = customer;
      }
}

class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name,address,code){
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType){
        let account;
       if(accountType === "CurrentAccount"){
        account = new CurrentAccount("6542", 500, 100, 0.3)
        return account
       }else{
        account = new SavingsAccount ("6542", 500, 0.6)
        return account
       }
    }
    createCustomer(name,address,phone,email){
        const customer = new Customer("boy","Suphanburi","022-1254-741","boy@gmail.com")        
        return customer;
    }
    createATM(){
        const atm = new ATM("BankNPRU","BankSE")
        return atm; 
    }
}

