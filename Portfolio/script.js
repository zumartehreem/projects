let cvBtn=document.getElementById('cvBtn')

let email= document.getElementById('email');
let password= document.getElementById('pass')
let submitBtn= document.getElementById('submit')
cvBtn.addEventListener('click',()=>{

    alert('cv successfully downloaded')
})

submitBtn.addEventListener('click', ()=>{

    if(email.value=="" || password.value==""){
        alert('please enter the email and password to proceed')
    }
    else{
        alert('Your data is successfully submitted')
    }
})
