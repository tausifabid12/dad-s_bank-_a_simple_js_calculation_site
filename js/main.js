// getting the log in btn to get the input value


document.getElementById('loginBtn').addEventListener('click', function (){
    // getting the input fields 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // setting default password this is only for fun not for using in realLife 

    if(email === "tausifabid1294@gmail.com" && password === "129400"){
        window.location.href = "bank.html";
    }else{
        alert('get lost chor sala');
    }
})


