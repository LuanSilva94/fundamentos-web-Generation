/* Criação de variaveis
// escopo global e pode ser redefinido - não é mais indicado oficialmente
var nomeDaVar
// escopo local e pode ser redefinido
let nomeDoLet
// escopo local e NÃO pode ser redefinido
const nomeDaConst = 'thiago'
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let dedicatoria = document.querySelector('#dedicatoria')
let nomeOk = false
let emailOK = false
let dedicatoriaOK = false
let map = document.querySelector('.map')
/*pode acessar a dom, por TagName,Id,Nome, Classe, Seletor(query)... 
Lembrando que a letra maiuscula afeta(case senstive)
nome e classe que podem ser varios, use: getElementsByName pois
são elementos no plural
*/

nome.style.width = '100%';
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'    
   } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
   }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.com') == -1 ) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = 'green'
        emailOK = true
    }
 }

 function validaDedicatoria(){
    let txtDedicatoria = document.querySelector('#txtDedicatoria')

    if (dedicatoria.value.length >= 200){
        txtDedicatoria.innerHTML = 'Texto é muito grande, digite no máximo 100 caracters!'
    } else {
        txtDedicatoria.style.display = 'none'
        dedicatoriaOK = true
    }
 }

 function enviar() {
    if(nomeOk == true && emailOK == true && dedicatoriaOK == true){
        alert("Formulário enviado com sucesso")
    } else {
        alert('Preencha o formuário corretamente antes de enviar...')
    }
 }

 function mapaZoom() {  
   map.style.width = '800px'
   map.style.height = '600px'
 }

 function mapaNormal(){
    map.style.width = '400px'
    map.style.height = '250px'
 }