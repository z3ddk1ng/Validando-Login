const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    //obter os valores das entradas
    const usernameValue = username.value.trim(); //trim remove os espaços em branco
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'O nome de usuário não pode estar em branco');
    } else{
        setSucessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'O email não pode estar vazio');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email inválido');
    } else{
        setSucessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'A senha não pode estar em branco');
    } else{
        setSucessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'A senha não pode estar em branco');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'A senha não é a mesma');
    }else{
        setSucessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message; //add mensagem de erro dentro do small
}

function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}