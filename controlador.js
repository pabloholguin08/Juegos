let doctor1=document.getElementById("doctor1")
let fotodoctor1=document.getElementById("fotodoctor1")
let doctor2=document.getElementById("doctor2")
let fotodoctor2=document.getElementById("fotodoctor2")
let contadorDoctor=0;

let bombero1=document.getElementById("bombero1")
let fotobombero1=document.getElementById("fotobombero1")
let bombero2=document.getElementById("bombero2")
let fotobombero2=document.getElementById("fotobombero2")
let contadorBombero=0;

let policia1=document.getElementById("policia1")
let fotopolicia1=document.getElementById("fotopolicia1")
let policia2=document.getElementById("policia2")
let fotopolicia2=document.getElementById("fotopolicia2")
let contadorPolicia=0;

let profesor1=document.getElementById("profesor1")
let fotoprofesor1=document.getElementById("fotoprofesor1")
let profesor2=document.getElementById("profesor2")
let fotoprofesor2=document.getElementById("fotoprofesor2")
let contadorProfesor=0;

doctor1.addEventListener("click", activardoctor1);
doctor2.addEventListener("click", activardoctor2);
bombero1.addEventListener("click", activarbombero1);
bombero2.addEventListener("click", activarbombero2);
policia1.addEventListener("click", activarpolicia1);
policia2.addEventListener("click", activarpolicia2);
profesor1.addEventListener("click", activarprofesor1);
profesor2.addEventListener("click", activarprofesor2);

function activardoctor1(){
    doctor1.classList.remove("invisible");
    fotodoctor1.classList.remove("bg-dark");
    contadorDoctor++;

    setTimeout(function(){

        if(contadorDoctor!=2){
            doctor1.classList.add("visible");
            fotodoctor1.classList.add("bg-dark");
            contadorDoctor--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoDoctor=document.getElementById("resultadodoctor");
            resultadoDoctor.classList.remove("invisible");
        }
        
    },3000)
}
function activardoctor2(){
    doctor2.classList.remove("invisible")
    fotodoctor2.classList.remove("bg-dark")
    contadorDoctor++;

    setTimeout(function(){
        if(contadorDoctor!=2){
            doctor2.classList.add("visible");
            fotodoctor2.classList.add("bg-dark");
            contadorDoctor--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoDoctor=document.getElementById("resultadodoctor");
            resultadoDoctor.classList.remove("invisible");
        }
    },3000)
}


function activarbombero1(){
    bombero1.classList.remove("invisible");
    fotobombero1.classList.remove("bg-dark");
    contadorBombero++;

    setTimeout(function(){

        if(contadorBombero!=2){
            bombero1.classList.add("visible");
            fotobombero1.classList.add("bg-dark");
            contadorBombero--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoBombero=document.getElementById("resultadobombero");
            resultadoBombero.classList.remove("invisible");
        }
        
    },3000)
}
function activarbombero2(){
    bombero2.classList.remove("invisible")
    fotobombero2.classList.remove("bg-dark")
    contadorBombero++;

    setTimeout(function(){
        if(contadorBombero!=2){
            bombero2.classList.add("visible");
            fotobombero2.classList.add("bg-dark");
            contadorBombero--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoBombero=document.getElementById("resultadobombero");
            resultadoBombero.classList.remove("invisible");
        }
    },3000)
}


function activarpolicia1(){
    policia1.classList.remove("invisible");
    fotopolicia1.classList.remove("bg-dark");
    contadorPolicia++;

    setTimeout(function(){

        if(contadorPolicia!=2){
            policia1.classList.add("visible");
            fotopolicia1.classList.add("bg-dark");
            contadorPolicia--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoPolicia=document.getElementById("resultadopolicia");
            resultadoPolicia.classList.remove("invisible");
        }
        
    },3000)
}
function activarpolicia2(){
    policia2.classList.remove("invisible")
    fotopolicia2.classList.remove("bg-dark")
    contadorDoctor++;

    setTimeout(function(){
        if(contadorPolicia!=2){
            policia2.classList.add("visible");
            fotopolicia2.classList.add("bg-dark");
            contadorPolicia--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoPolicia=document.getElementById("resultadopolicia");
            resultadoPolicia.classList.remove("invisible");
        }
    },3000)
}


function activarprofesor1(){
    profesor1.classList.remove("invisible");
    fotoprofesor1.classList.remove("bg-dark");
    contadorProfesor++;

    setTimeout(function(){

        if(contadorProfesor!=2){
            profesor1.classList.add("visible");
            fotoprofesor1.classList.add("bg-dark");
            contadorProfesor--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoProfesor=document.getElementById("resultadoprofesor");
            resultadoProfesor.classList.remove("invisible");
        }
        
    },3000)
}
function activarprofesor2(){
    profesor2.classList.remove("invisible")
    fotoprofesor2.classList.remove("bg-dark")
    contadorProfesor++;

    setTimeout(function(){
        if(contadorProfesor!=2){
            profesor2.classList.add("visible");
            fotoprofesor2.classList.add("bg-dark");
            contadorProfesor--;
        }else{
            audio=new Audio('audio/aplausos.mp3');
            audio.play();
            let resultadoProfesor=document.getElementById("resultadoprofesor");
            resultadoProfesor.classList.remove("invisible");
        }
    },3000)
}
