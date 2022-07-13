const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const repassword = document.getElementById("re-password")


function error (input, message){
    input.className = "form-control is-invalid"
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
}

function success (input){
    input.className = "form-control is-valid"
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)){
        success(input);
    } else {
            error(input, "hatalı mail adresi girdiniz")
        }
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input, `${input.id} gerekli`);
        }else {
            success(input);
        }
    })
}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter içerebilir.`)
    } else if(input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter içerebilir.`)
    } else {
        success(input)
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor.')
    }
}

function checkPhone(input){
    var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (exp.test(input.value)){
        success(input)
    } else {
        error(input, "Geçerli bir telefon numarası giriniz")
    }
}


form.addEventListener("submit",function(e){
    e.preventDefault();

    checkRequired([username, email, password, repassword, phone])
    checkEmail(email);
    checkLength(username, 7, 20);
    checkLength(password,7,15);
    checkLength(repassword,7,15);
    checkPassword(password,repassword);
    checkPhone(phone)
})