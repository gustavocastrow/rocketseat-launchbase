const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

/* === === === === === === === === === === === === === === === === === === ===
Crie uma função createTransaction para adicionar uma nova transação no array de 
transações de um usuário, essa função deve receber como parâmetro um objeto de 
transação que tem o seguinte formato:

{
  type: 'credit',
  value: 50.5
}

=== === === === === === === === === === === === === === === === === === ===*/

function createTransaction(transcation){
  user.transactions.push(transcation)

  if(transcation.type == "credit"){
    user.balance = user.balance + transcation.value
  }else {
    user.balance = user.balance - transcation.value
  }
}

//Relatórios.

//Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o
//tipo de transação credit/debit, percorre as transações do usuário e retorna 
//o objeto da transação de maior valor com aquele tipo:

function getHigherTransactionByType(type){
  
  let higherTransaction
  let higherValue = 0
  for(let transaction of user.transactions){
    if(type == transaction.type && higherValue < transaction.value){
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

//Crie uma função chamada getAverageTransactionValue que retorna o valor médio 
//das transações de um usuário independente do seu tipo:

function getAverageTransactionValue(){
  let sum = 0;
  for(let transaction of user.transactions){
    sum += transaction.value
  }
  return sum / user.transactions.length
}

function getTransactionsCount(){
  
  let countCredit = 0
  let countDebit = 0

  for(let transaction of user.transactions){
    if(transaction.type == "credit"){
      countCredit++
    }else {
      countDebit++
    }
  }

  return {
    credit: countCredit,
    debit: countDebit
  }
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }
getAverageTransactionValue() // 70
getTransactionsCount() // { credit: 2, debit: 2 

console.log(user.balance) // 60
console.log(getHigherTransactionByType('credit'))// { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit'))// { type: 'debit', value: 80 }
console.log(getAverageTransactionValue()) // 70
console.log(getTransactionsCount()) // { credit: 2, debit: 2 }