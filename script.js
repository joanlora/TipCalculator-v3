document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById('billTotal').value)
    var tip = document.getElementById('tipInput').value
    var people = document.getElementById('totalPeople').value
    document.getElementById('tipOutput').innerHTML = `${tip}%`

    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
    var tipPerPerson = (bill * (tip/100)) / people
    var split = finalBill / people

    console.log(finalBill)
    console.log("total per person: " + tipPerPerson)

    var tipAmount = document.querySelector('#tipAmount')
    var totalBillWithTip = document.querySelector('#totalBillWithTip')
    var totalPerPerson = document.querySelector('#tipPerPerson')
    var splitPerPerson = document.querySelector('#split')
  
    tipAmount.value = tipValue.toFixed(2)
    totalBillWithTip.value = finalBill.toFixed(2)
    totalPerPerson.value = tipPerPerson.toFixed(2)
    splitPerPerson.value = split.toFixed(2)
  
    document.getElementById('results').style.display='block'
  }