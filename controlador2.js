let perro1=document.getElementById("perro1");
let fotoperro1=document.getElementById("fotoperro1");
let perro2=document.getElementById("perro2");
let fotoperro2=document.getElementById("fotoperro2");
let contadorPerro=0;

let gato1=document.getElementById("gato1");
let fotogato1=document.getElementById("fotogato1");
let gato2=document.getElementById("gato2");
let fotogato2=document.getElementById("fotogato2");
let contadorGato=0;

let tortuga1=document.getElementById("tortuga1");
let fototortuga1=document.getElementById("fototortuga1");
let tortuga2=document.getElementById("tortuga2");
let fototortuga2=document.getElementById("fototortuga2");
let contadorTortuga=0;

let elefante1=document.getElementById("elefante1");
let fotoelefante1=document.getElementById("fotoelefante1");
let elefante2=document.getElementById("elefante2");
let fotoelefante2=document.getElementById("fotoelefante2");
let contadorElefante=0;

perro1.addEventListener("click", activarperro1);
perro2.addEventListener("click", activarperro2);

gato1.addEventListener("click", activargato1);
gato2.addEventListener("click", activargato2);

tortuga1.addEventListener("click", activartortuga1);
tortuga2.addEventListener("click", activartortuga2);

elefante1.addEventListener("click", activarelefante1);
elefante2.addEventListener("click", activarelefante2);

function activarperro1(){

    console.log("hice clic en el boton1");
    perro1.classList.remove("bg-dark");
    fotoperro1.classList.remove("invisible");
    contadorPerro++;

    setTimeout(function () {

        if(contadorPerro != 2){

            perro1.classList.add("bg-dark");
            fotoperro1.classList.add("invisible");
            contadorPerro++;

        }else{
            let audio=new Audio("audio/perro.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },1000)

            
            let resultadoPerro=document.getElementById("resultadoPerro");
            resultadoPerro.classList.remove("invisible");
            resultadoPerro.classList.add("visible");
        }
        
        
    },3000)
}

function activarperro2(){

    console.log("hice clic en el boton2");
    perro2.classList.remove("bg-dark");
    fotoperro2.classList.remove("invisible");
    contadorPerro++;

    setTimeout(function () {

        if(contadorPerro != 2){

            perro2.classList.add("bg-dark");
            fotoperro2.classList.add("invisible");
            contadorPerro--;

        }else{
            let audio=new Audio("audio/perro.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },1000)
            let resultadoPerro=document.getElementById("resultadoPerro");
            resultadoPerro.classList.remove("invisible");
            resultadoPerro.classList.add("visible");
        }
        
        
    },3000)
}

function activargato1(){

    console.log("hice clic en el boton1");
    gato1.classList.remove("bg-dark");
    fotogato1.classList.remove("invisible");
    contadorGato++;

    setTimeout(function () {

        if(contadorGato != 2){

            gato1.classList.add("bg-dark");
            fotogato1.classList.add("invisible");
            contadorGato++;

        }else{
            let audio=new Audio("audio/gato.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },2000)
            let resultadoGato=document.getElementById("resultadoGato");
            resultadoGato.classList.remove("invisible");
            resultadoGato.classList.add("visible");
        }
        
        
    },3000)
}

function activargato2(){

    console.log("hice clic en el boton1");
    gato2.classList.remove("bg-dark");
    fotogato2.classList.remove("invisible");
    contadorGato++;

    setTimeout(function () {

        if(contadorGato != 2){

            gato2.classList.add("bg-dark");
            fotogato2.classList.add("invisible");
            contadorGato--;

        }else{
            let audio=new Audio("audio/gato.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },2000)
            let resultadoGato=document.getElementById("resultadoGato");
            resultadoGato.classList.remove("invisible");
            resultadoGato.classList.add("visible");
        }
        
        
    },3000)
}

function activartortuga1(){

    console.log("hice clic en el boton1");
    tortuga1.classList.remove("bg-dark");
    fototortuga1.classList.remove("invisible");
    contadorTortuga++;

    setTimeout(function () {

        if(contadorTortuga != 2){

            tortuga1.classList.add("bg-dark");
            fototortuga1.classList.add("invisible");
            contadorTortuga++;

        }else{
            let audio=new Audio("audio/tortuga.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },2000)
            let resultadoTortuga=document.getElementById("resultadoTortuga");
            resultadoTortuga.classList.remove("invisible");
            resultadoTortuga.classList.add("visible");
        }
        
        
    },3000)
}

function activartortuga2(){

    console.log("hice clic en el boton1");
    tortuga2.classList.remove("bg-dark");
    fototortuga2.classList.remove("invisible");
    contadorTortuga++;

    setTimeout(function () {

        if(contadorTortuga != 2){

            tortuga2.classList.add("bg-dark");
            fototortuga2.classList.add("invisible");
            contadorTortuga--;

        }else{
            let audio=new Audio("audio/tortuga.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },2000)
            let resultadoTortuga=document.getElementById("resultadoTortuga");
            resultadoTortuga.classList.remove("invisible");
            resultadoTortuga.classList.add("visible");
        }
        
        
    },3000)
}

function activarelefante1(){

    console.log("hice clic en el boton1");
    elefante1.classList.remove("bg-dark");
    fotoelefante1.classList.remove("invisible");
    contadorElefante++;

    setTimeout(function () {

        if(contadorElefante != 2){

            elefante1.classList.add("bg-dark");
            fotoelefante1.classList.add("invisible");
            contadorElefante++;

        }else{
            let audio=new Audio("audio/elefante.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },2000)
            let resultadoElefante=document.getElementById("resultadoElefante");
            resultadoElefante.classList.remove("invisible");
            resultadoElefante.classList.add("visible");
        }
        
        
    },3000)
}

function activarelefante2(){

    console.log("hice clic en el boton1");
    elefante2.classList.remove("bg-dark");
    fotoelefante2.classList.remove("invisible");
    contadorElefante++;

    setTimeout(function () {

        if(contadorElefante != 2){

            elefante2.classList.add("bg-dark");
            fotoelefante2.classList.add("invisible");
            contadorElefante--;

        }else{
            let audio=new Audio("audio/elefante.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause()
            },2000)
            let resultadoElefante=document.getElementById("resultadoElefante");
            resultadoElefante.classList.remove("invisible");
            resultadoElefante.classList.add("visible");
        }
        
        
    },3000)
}