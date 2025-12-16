import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function randomDominio(){
    const dominios = [];
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let ext = ['.com', '.net', '.org','.dev'];

    for(let i = 0 ; i < pronoun.length ; i++ ){
      const p = pronoun[i]
      for(let j = 0; j < adj.length; j++){
        const a = adj[j]
        for(let k = 0;k < noun.length; k++){
          const n = noun[k]
          for(let l = 0; l < ext.length;l++){
            const e = ext[l]

            dominios.push(p+a+n+e)


          }
        }
      }
    }
    return dominios
  }
  let dominio = document.getElementById("yellow")
  dominio.innerHTML = randomDominio().join('<br>');

  
};
