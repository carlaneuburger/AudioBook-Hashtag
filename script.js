                       // recupere um elemento a partir do id dele
const botaoPlayPause = document.getElementById ("play-pause");
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById("audio-capitulo");


//const pq esse valor '10' nao ira mudar
const numeroCapitulos = 10 ;
let taTocando = 0;
let capituloAtual = 1;



//tocar audio quando apertar o play 
function tocarFaixa () {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function  tocarOuPausar(){

    if ( taTocando === 0 ) {
        tocarFaixa();
        taTocando=1;
    
    } else {
        pausarFaixa();
        taTocando=0;
    }

}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;

}

function proximaFaixa(){

    if (capituloAtual === numeroCapitulos) {

    
          capituloAtual = 1;
        
           }  else{
         capituloAtual =capituloAtual + 1;
            }
            audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
            tocarFaixa();
            taTocando = 1;
            trocarNomeFaixa();
        }


        
function VoltarFaixa(){

    if (capituloAtual === 1) {

    
          capituloAtual = numeroCapitulos;
        
           }  else{
         capituloAtual = capituloAtual - 1;
            }


            audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
            tocarFaixa();
            taTocando = 1;
            trocarNomeFaixa();
        }


     botaoPlayPause.addEventListener('click', tocarOuPausar);
     botaoAvancar.addEventListener('click',proximaFaixa);
     botaoVoltar.addEventListener('click', VoltarFaixa);