// selecão de elementos
const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputCheck = document.getElementById('checkbox');
const erroName = document.querySelector('.errorName')
const erroEmail = document.querySelector('.errorEmail')
const erroPassword = document.querySelector('.errorPassword')
const btnSubmit = document.getElementById('btn--submit')



// validação do formulario
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputName.value === "") {
        erroName.innerHTML = 'nome é obrigatório';
        erroName.style.display = 'block';
        inputName.classList.add('errorInput')
        return;
    } else {
        inputName.classList.remove('errorInput');
        erroName.innerHTML = "";
    }

    if (inputEmail.value === "" || !validEmail(inputEmail.value)) {
        erroEmail.innerHTML = 'Email invalido. Ex: nome@dominio.com';
        erroEmail.style.display = 'block';
        inputEmail.classList.add('errorInput')
        return;
    } else {
        inputEmail.classList.remove('errorInput');
        erroEmail.innerHTML = "";
    }

    if (!validaPassword(inputPassword.value, 8)) {
        erroPassword.innerHTML = 'senha minimo 8 digitos';
        erroPassword.style.display = 'block';
        inputPassword.classList.add('errorInput')
        return;
    } else {
        inputPassword.classList.remove('errorInput');
        erroPassword.innerHTML = "";
    }

    form.submit(finished());

    
    
    
});

// validação do Email e senha 
function validEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}

function validaPassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }
    return false;
};


// removendo o erro
inputName.addEventListener('input', () => {
    erroName.innerHTML = '';
    inputName.classList.remove('errorInput');
});


inputEmail.addEventListener('input', () => {
    erroEmail.innerHTML = '';
    inputEmail.classList.remove('errorInput');
});


inputPassword.addEventListener('input', () => {
    erroPassword.innerHTML = '';
    inputPassword.classList.remove('errorInput');
});




// are de finalizado
function finished() {

    const area = document.querySelector('.container--formulario');
    area.innerHTML = "";
    const areaFin = document.createElement('div');
    areaFin.innerHTML = '<h2>Formulário Enviado!</h2>';
    area.appendChild(areaFin);

    const btnBack = document.createElement('button');
    btnBack.innerHTML = "voltar";
    btnBack.style.width = "150px"
    
    btnBack.style.height = "30px"
    btnBack.style.textAlign = "center"
    btnBack.style.fontSize = "20px"
    btnBack.style.marginTop = "30px"

    area.appendChild(btnBack);

    btnBack.addEventListener('click', () => {
        location.reload();
    });
};

