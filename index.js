
let palabraAleatoria = document.querySelector("#randomWord");
//let input = document.querySelector("input");
let palabraIngresada  = document.getElementById("text");
let time = 20;
let tiempo = document.querySelector("#timeSpan");
let score = 0  ;
let puntaje = document.querySelector("#score");
let fin = document.querySelector("#end-game-container");

const words = [
    'schwarzenegger',
    'ripley',
    'gollum',
    'atriedes',
    'saruman',
    'sauron',
    'mjolnir',
    'nabucodonosor',
    'valar morghulis',
    'dune',
    'nostromo',
    'erebor',
    'melisandre',
    'baggins',
    'darth',
    'jaqen hghar',
    'chewbacca',
    'vader',
    'skywalker',
    'anakin',
    'stormtrooper',
    'endor',
    'legolas',
    'aragorn',
    'gimli',
    'frodo',
    'braavos',
    'baratheon',
    'stark',
    'lannister',
    'targaryen',
    'daenerys',
    'khaleesi',
    'dracarys',
    'harkonnen',
    'padishah shaddam',
    'kwisatz haderach',
    'fremen',
    'arrakis'

  ];
  //-----------------------------inicio----------------------------------//

 
//-------------------------Palabra Random-------1-function randomWords( )------------------------------------------
function randomWords( ) { 
    for (let i = 0; i < words.length; i++) { 
        const palabra = Math.floor(Math.random() * words.length) ;//redondear a un numero entero con math.floor de un numero aleatorio de (math.random x words(20))
        console.log(words[palabra]);
        return words[palabra];
    }
  };
  //---------------------Agregar al DOM---------2-function addToDOM()---------------------------------------
  function addToDOM(){
    palabraAleatoria.textContent = randomWords();
    palabraIngresada.addEventListener("input", valor);
    actualizarTiempo ()   
  };
//------------Evento input----------------------3--function valor (e)-----------------------------------
palabraIngresada.addEventListener("input", valor);

function valor (e){
  if ( palabraIngresada.value === palabraAleatoria.textContent ) {                 
    time +=3;
    tiempo.textContent = time+3;
    palabraIngresada.value = "";
    addToDOM();
    updateScore();
     }
 //console.log(e);
 console.log(palabraIngresada.value);
}; 
addToDOM();
//--------------------------tiempo------------------ 4 function actualizarTiempo ()------------------------------------
let timeInterval = setInterval(actualizarTiempo, 1000);

function actualizarTiempo (){
   tiempo.textContent = time-- + "s"
    if( time === -1){
      clearInterval(timeInterval);
      gameOver();
    }
console.log(time);//console.log(tiempo);
};
//---------------------funciones 5 updateScore (en valor) y  6 gameOver (va dentro de tiempo)-------------------------------
function updateScore(){
 score++;
 puntaje.textContent =  score;
 };
  function gameOver(){
   
   //fin.innerHTML = " <h1> Te Quedaste sin Tiempo </h1> " ; //!!!! Minificado ¡¡¡¡
   let h1 = document.createElement("h1");          // creo el elemento;
   fin.appendChild(h1);  
   h1.style.color = "black";                         // Al padre le agrego el elemento h1 
   h1.textContent = " Te Quedaste sin Tiempo";
 
   let p = document.createElement("p"); 
   fin.appendChild(p); 
   p.style.color = "azure";
   p.style.fontFamily = "Orbitron";
   p.style.fontSize = "25px";                     
   p.textContent = "Tu Putaje fue : " + `${score}`; 
    
   if(score <=4 ){
    let frase = document.createElement("p"); 
    fin.appendChild(frase); 
    frase.style.color = "black"; 
    frase.style.fontFamily = "Orbitron";
    frase.style.fontSize = "30px";                    
    frase.textContent = "Puntaje Patetico ";
   } else if (score >=12) {
    let frase = document.createElement("p"); 
    fin.appendChild(frase); 
    frase.style.color = "#1bf900";
    frase.style.fontFamily = "Orbitron";
    frase.style.fontSize = "30px";  
    frase.textContent = "Puntaje HackerMan ";
   } else {
    let frase = document.createElement("p"); 
    fin.appendChild(frase); 
    frase.style.color = "#2700ff";
    frase.style.fontFamily = "Orbitron";
    frase.style.fontSize = "30px";  
    frase.textContent = "Puntaje Muy Bueno ";
   };
   let boton = document.createElement("button");
   fin.appendChild(boton);
   boton.textContent = "Volvér a Jugar";
   boton.addEventListener("click",()=>{
    location.reload();
  
   })
   
};







