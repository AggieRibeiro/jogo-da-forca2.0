const animais1 = ["panda", "arara", "cobra", "grilo", "hiena", "lesma"];
const animais2 =["paca", "boto", "anta", "égua", "foca", "gato"]
let palavrasecreta;
function Sortear(){
    let tamanho = document.getElementById('tamanho').value;
    if(tamanho =='4'){
        lista=animais2
    }else if(tamanho==5){
        lista=animais1
    }
    palavrasecreta = lista[Math.floor(Math.random() * lista.length)];
    const cafePergunta = [];
    while (lista.length) {
        const index = palavrasecreta;
        const [option] = lista.splice(index, 1);
        cafePergunta.push(option);
    }
    document.getElementById('tipo').innerHTML = ("Animais");
    if (palavrasecreta=="panda"){
        inicial= "P";
    } else if (palavrasecreta == "arara"){
        inicial= "A";
    } else if (palavrasecreta == "cobra"){
        inicial= "C";
    } else if (palavrasecreta == "grilo"){
        inicial= "G";
    } else if (palavrasecreta == "hiena"){
        inicial= "H";
    } else if (palavrasecreta == "lesma"){
        inicial= "L";
    } else if (palavrasecreta=="paca"){
        inicial= "P";
    } else if (palavrasecreta == "boto"){
        inicial= "B";
    } else if (palavrasecreta == "anta"){
        inicial= "A";
    } else if (palavrasecreta == "egua"){
        inicial= "E";
    } else if (palavrasecreta == "foca"){
        inicial= "F";
    } else if (palavrasecreta == "gato"){
        inicial= "G";
    }
    document.getElementById('inicial').innerHTML = (inicial);
}

function Confirmar(){
    let resposta = document.getElementById('resposta').value;
    if (resposta == palavrasecreta){
        document.getElementById('resultado').innerHTML = ("Verdadeiro");
    }else{
        document.getElementById('resultado').innerHTML = ("Falso");
    }
}