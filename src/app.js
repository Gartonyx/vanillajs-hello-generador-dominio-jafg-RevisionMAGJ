import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let ext = ['.com', '.net', '.org','.dev'];

      let container = document.getElementById("domain");

    for(let p = 0 ; p < pronoun.length ; p++ ){
      for(let a = 0; a < adj.length; a++){
        for(let n = 0;n < noun.length; n++){
          for(let e = 0; e < ext.length;e++){

          let domain =pronoun[p] + adj[a] + noun[n] + "." + ext[e];

                    container.innerHTML += domain + "<br>";


                    //Imprimir en consola 
                      console.log(domain);




          }
        }
      }
    }
  };

 
