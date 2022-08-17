
//setting deposite ammount


document.getElementById('depositeBtn').addEventListener('click', function () {



    // getting diposite input from user 
    let dipositeAmount = document.getElementById("depositeNum");
    let dipositeAmountValue = dipositeAmount.value;
    let floatDipositeAmount = parseFloat(dipositeAmountValue);



    // clearing the dposite field 
    dipositeAmount.value = '';


    //getting privious diposite amount
    let priviousDepositesTag = document.getElementById('diposites');
    let priviousDeposites = priviousDepositesTag.innerText;
    let floatPriviousDeposites = parseFloat(priviousDeposites);



    //getting the balance amount
    let balanceTag = document.getElementById('balance');
    let balanceValue = balanceTag.innerText;
    let floatBalance = parseFloat(balanceValue);



    //cheacking if input is not a number
    if (isNaN(floatDipositeAmount)) {
        alert("Please enter a valid number");
        return;
    }



    // if input is negitive
    if (floatDipositeAmount < 0) {
        alert('please enter a valid number');
        return;
    }



    //adding diposites to main balance
    totalBalance = floatBalance + floatDipositeAmount;
    const mainBalance = balanceTag.innerText = totalBalance;



    // adding user diposites to privious diposites
    const totalDiposite = floatDipositeAmount + floatPriviousDeposites;
    priviousDepositesTag.innerText = totalDiposite;


})





//setting widthdeaw ammount



document.getElementById('withdrawBtn').addEventListener('click', function () {


    // getting withdraw input from user 
    let withdrawAmount = document.getElementById("withdrawNum");
    let withdrawAmountValue = withdrawAmount.value;
    let floatwithdrawAmount = parseFloat(withdrawAmountValue);
    console.log(floatwithdrawAmount)



    //getting privious withdraw amount
    let priviousWidthdrawTag = document.getElementById('widthdraws');
    let priviousWidthdraw = priviousWidthdrawTag.innerText;
    let floatPriviousWidthdraw = parseFloat(priviousWidthdraw);



    // clearing the dposite field 
    withdrawAmount.value = '';



    //getting the balance amount
    let balanceTag = document.getElementById('balance');
    let balanceValue = balanceTag.innerText;
    let floatBalance = parseFloat(balanceValue);



    //cheacking if input is not a number
    console.log(isNaN(floatwithdrawAmount))
    if (isNaN(floatwithdrawAmount)) {
        alert("Please enter a valid number");
        return;
    }


    // if input is negitive
    if (floatwithdrawAmount < 0) {
        alert('please enter a valid number');
        return;
    }


    //cheacking if widthdraw amount is larger then main balance
    if (floatwithdrawAmount > floatBalance) {
        alert(`You don't have enough moooney`);
        return;
    }




    //reduceing  withdraws from main balance
    totalBalance = floatBalance - floatwithdrawAmount;
    const mainBalance = balanceTag.innerText = totalBalance;



    // adding user withdraws to privious withdraws
    const totalwithdraw = floatwithdrawAmount + floatPriviousWidthdraw;
    priviousWidthdrawTag.innerText = totalwithdraw;



})




// log out function

console.log(document.getElementById('outBtn'));
document.getElementById('logOutBtn').addEventListener('click', function () {
    window.location.href = "index.html";
})