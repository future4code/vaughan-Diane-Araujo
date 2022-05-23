

//1 
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}
let user1 = new UserAccount("11122233344", "ane", 91)


//2 


class Transaction {
    private date: string;
    private value: number;
    private description: string;

    public getdate() {
        return this.date
    }
    public getvalue() {
        return this.value
    }

    public getdescription() {
        return this, this.value
    }
public retornaDados (){
    console.log(this.date, this.value, this.description);
}
    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
}
 let novaTransaction = new Transaction ('compra de sapatos', 350, '18-04-2022')

 //3

 class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }



  aaaa



