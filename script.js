```javascript
function pesquisar(){

let texto =
document.getElementById("busca")
.value.toLowerCase();

let resposta = "Nada encontrado.";

if(texto.includes("dor de cabeça")){
resposta =
"🌿 Algumas pessoas utilizam chá de camomila ou hortelã.";
}

if(texto.includes("sono")){
resposta =
"😴 Camomila e erva-cidreira são populares em chás relaxantes.";
}

document.getElementById("resultado")
.innerHTML = resposta;

}

function quiz(){

let resposta =
document.querySelector(
'input[name="q1"]:checked'
);

if(!resposta){
document.getElementById("pontos")
.innerHTML = "Escolha uma resposta!";
return;
}

let pontos =
Number(resposta.value);

document.getElementById("pontos")
.innerHTML =
"🏆 Pontuação: " + pontos + "/1";

}

const curiosidades = [

"🌱 Existem milhares de plantas medicinais no mundo.",

"🌿 A camomila é uma das ervas mais conhecidas.",

"🍃 O alecrim é usado há séculos.",

"🌼 A lavanda é famosa pelo perfume."

];

function curiosidade(){

let numero =
Math.floor(
Math.random()*curiosidades.length
);

document.getElementById("curiosidade")
.innerHTML =
curiosidades[numero];

}

document.getElementById("tema")
.onclick = () =>
document.body.classList.toggle("dark");
```
