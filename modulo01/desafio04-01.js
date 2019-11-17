const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction (type, value){
  user.transactions.push(transactions)
  if(transactions.type === "credit"){
    user.balance = user.balance + transactions.value
    return user.balance

  } else if(transactions.type === "debit"){
    user.balance = user.balance - transactions.value
  }else {
    console.log("Error!")
  }
}

function getHigherTransactionByType(debit, credit){
  let max = 0
  for(let i = 0; i<user.transactions.length; i++){
    if(transactions[i].value > max){
      max = transactions[i].value
    }

  }
}
createTransaction('credit', 10)
getHigherTransactionByType('credit')