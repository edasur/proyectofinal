/*Variables de input*/
const firstname = document.getElementById('firstname')
const last = document.getElementById('last')
const cel = document.getElementById('cel')
const email = document.getElementById('email')
const message = document.getElementById('message')
/*Formulario*/
const form = document.getElementById('form')
/*Mensajes de error*/
const errorElement = document.getElementById('error_form')


form.addEventListener('submit', (e) => {
    let messages = []

    if (firstname.value === '' || firstname.value == null) {
        messages.push('Nombre es requerido')
    }

    if (firstname.value.length < 3) {
        messages.push('Nombre no valido')
    }

    if (last.value === '' || last.value == null) {
        messages.push('Apellidos son requeridos')
    }

    if (last.value.length < 3) {
        messages.push('Apellidos no validos')
    }

    if (cel.value === '' || cel.value == null) {
        messages.push('Numero celular es requerido')
    }

    if (cel.value.length > 9 || cel.value.length < 9) {
        messages.push('Numero celular Invalido')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email es requerido')
    }

    if (message.value === '' || message.value == null) {
        messages.push('Mensaje es requerido')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else {

        alert("Mensaje Enviado!!");
    }
})