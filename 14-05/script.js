var notasAps = [10,  5];
var notasIcc = [ 7, 8];
var notasPfe = [7, 5];
var notasPmb = [5, 8];

var sel = document.getElementById("disc");
var fundo = document.body;
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var mt = document.getElementById('mt');

function seletor(){
    disc = sel.value;
    switch(disc){
        case"1":
        fundo.style.background = 'Tomato';
        n1.innerHTML = notasAps [0]
        n2.innerHTML = notasAps [1]
        mt.innerHTML = (notasAps[0] + notasAps[1])/2;
        break;

        case"2":
        fundo.style.background = "DeepSkyBlue";
        n1.innerHTML = notasIcc[0];
        n2.innerHTML = notasIcc[1];
        mt.innerHTML = (notasIcc[0] + notasIcc[1])/2;
        break;

        case"3":
        fundo.style.background = 'yellow';
        n1.innerHTML = notasPfe [0]
        n2.innerHTML = notasPfe [1]
        mt.innerHTML = (notasPfe[0] + notasPfe[1])/2;
        break;

        default:
        fundo.style.background = 'GreenYellow';
        n1.innerHTML = notasPmb [0]
        n2.innerHTML = notasPmb [1]
        mt.innerHTML = ((notasPmb[0] + notasPmb[1])/2,1);
        break;
    }
}