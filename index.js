
/* Fundos */
var FundoCorpo = ""; /* tema 2: hsl(0, 0%, 90%) */
var FundoTeclado = ""; /* tema 2: hsl(0, 5%, 81%)*/
var FundoTela = ""; /* tema 2: hsl(0, 0%, 93%) */

/* teclas chaves --------------------*/

var DelReset = ""; /* tema 2: hsl(185, 42%, 37%) */
var DelResetSombra = ""; /* hsl(185, 58%, 25%) */
var TeclaIgual = ""; /* tema 2: hsl(25, 98%, 40%) */
var TeclaIgualSombra = ""; /* tema 2:  hsl(25, 99%, 27%) */
var TeclasAritimeticas = ""; /* tema 2: hsl(45, 7%, 89%) */
var TeclasAritimeticasSombra = ""; /* tema 2: hsl(35, 11%, 61%) */
var DelResetHover = "";
var TeclaIgualHover ="";

/* Texto ---------------------------*/

var TextoAritimetica = "";  /* tema 2: hsl(60, 10%, 19%) */
var TextoDelReset = "";  /* tema 2: hsl(0, 0%, 100%) */
var TextoTeclaIgual = "";
/* Hover */
var TeclasAritimeticasHover = "";

function tema2() {
    var movimento2 = document.getElementById("on");
    movimento2.style.marginLeft = "27px";
    movimento2.classList = "on2";

    /* TODAS AS CORES */
    FundoCorpo = "hsl(0, 0%, 90%)"; /* ------------------------Cor do body */
    FundoTeclado = "hsl(0, 5%, 81%)";/* -----------------------Cor fundo teclado*/
    FundoTela = "hsl(0, 0%, 93%)";/*---------------------------Cor fundo da tela em que aparece o calculo */
    DelReset = "hsl(185, 42%, 37%)";/* ------------------------Cor das teclas Del e Reset*/
    DelResetSombra = "hsl(185, 58%, 25%)";/* ------------------Cor do boder das teclas Del e Reset*/
    TextoDelReset = "hsl(0, 0%, 100%)"; /*---------------------Cor do texto Del e Reset */
    TeclaIgual = "hsl(25, 98%, 40%)";/* ------------------------Cor da tecla igual */
    TeclaIgualSombra = "hsl(25, 99%, 27%)";/* ------------------Cor do boder da tecla igual*/
    TeclasAritimeticas = "hsl(45, 7%, 89%)";/* ------------------Cor das teclas da aritimetica */
    TextoAritimetica = "hsl(60, 10%, 19%)";/* -------------------Cor do texto das teclas aritimetica*/
    TeclasAritimeticasSombra = "hsl(35, 11%, 61%)";/* -----------Cor do boder da tecla aritimetica*/

    TeclasAritimeticasHover = "#ffffff";/* ------------Cor hover aritimetica*/
    DelResetHover = "#62b5bd";/* ------------Cor hover DelReset*/
    TeclaIgualHover = "#ff8b38";/* ------------Cor hover igual*/



    /* Fundos */
    var CorCorpo2 = document.getElementById("corpo");
    
    CorCorpo2.style.backgroundColor = FundoCorpo;

    var FundoTeclado2 = document.getElementById("teclas");
    
    FundoTeclado2.style.backgroundColor = FundoTeclado;

    var FundoTela2 = document.getElementById("tela");
    
    FundoTela2.style.backgroundColor = FundoTela;

    var FundoTela02 = document.getElementById("display");
    FundoTela02.style.backgroundColor = FundoTela;

    var celetor = document.getElementById("tema");
    celetor.style.backgroundColor = FundoTela;

      /* Teclas chaves */
    var DelReset2 = document.getElementById("apagar-d");
    
    DelReset2.style.backgroundColor = DelReset;
    DelReset2.style.borderColor = DelResetSombra;
    DelReset2.style.color = TextoDelReset;
     // Hover
     var hoverCorTecla12 = function(event) {
      DelReset2.style.backgroundColor = DelResetHover;
    };

    DelReset2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      DelReset2.style.backgroundColor = DelReset;

    };
      
    DelReset2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */

    var DelResetr2 = document.getElementById("reset");
    DelResetr2.style.backgroundColor = DelReset;
    DelResetr2.style.borderColor = DelResetSombra;
    DelResetr2.style.color = TextoDelReset;
    // Hover
    var hoverCorTecla12 = function(event) {
      DelResetr2.style.backgroundColor = DelResetHover;
    };

    DelResetr2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      DelResetr2.style.backgroundColor = DelReset;

    };
      
    DelResetr2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */



    var TeclaIgual2 = document.getElementById("igual");
    TeclaIgual2.style.backgroundColor = TeclaIgual;
    TeclaIgual2.style.borderColor = TeclaIgualSombra;
    TeclaIgual2.style.color = TextoDelReset;

    // Hover
    var hoverCorTecla12 = function(event) {
      TeclaIgual2.style.backgroundColor = TeclaIgualHover;
    };

    TeclaIgual2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      TeclaIgual2.style.backgroundColor = TeclaIgual;

    };
      
    TeclaIgual2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */

    var TeclasAritimeticas21 = document.getElementById("aritimetica1");
    TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas21.style.color = TextoAritimetica;
    TeclasAritimeticas21.style.borderColor = TeclasAritimeticasSombra;

    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas21.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas21.addEventListener('mouseleave', removerHoverCorTecla1);
    
    var TeclasAritimeticas22 = document.getElementById("aritimetica2");
    TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas22.style.color = TextoAritimetica;
    TeclasAritimeticas22.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas22.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas22.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas23 = document.getElementById("aritimetica3");
    TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas23.style.color = TextoAritimetica;
    TeclasAritimeticas23.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas23.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas23.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas24 = document.getElementById("aritimetica4");
    TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas24.style.color = TextoAritimetica;
    TeclasAritimeticas24.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas24.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas24.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas25 = document.getElementById("aritimetica5");
    TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas25.style.color = TextoAritimetica;
    TeclasAritimeticas25.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas25.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas25.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas26 = document.getElementById("aritimetica6");
    TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas26.style.color = TextoAritimetica;
    TeclasAritimeticas26.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas26.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas26.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas27 = document.getElementById("aritimetica7");
    TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas27.style.color = TextoAritimetica;
    TeclasAritimeticas27.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas27.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas27.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas28 = document.getElementById("aritimetica8");
    TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas28.style.color = TextoAritimetica;
    TeclasAritimeticas28.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas28.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas28.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas29 = document.getElementById("aritimetica9");
    TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas29.style.color = TextoAritimetica;
    TeclasAritimeticas29.style.borderColor = TeclasAritimeticasSombra;

    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas29.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas29.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas20 = document.getElementById("aritimetica0");
    TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas20.style.color = TextoAritimetica;
    TeclasAritimeticas20.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas20.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas20.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2ponto = document.getElementById("aritimetica.");
    TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2ponto.style.color = TextoAritimetica;
    TeclasAritimeticas2ponto.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2ponto.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2ponto.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */


    var TeclasAritimeticas2dividir = document.getElementById("aritimetica/");
    TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2dividir.style.color = TextoAritimetica;
    TeclasAritimeticas2dividir.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2dividir.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2dividir.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2vezes = document.getElementById("aritimetica*");
    TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2vezes.style.color = TextoAritimetica;
    TeclasAritimeticas2vezes.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2vezes.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2vezes.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2menos = document.getElementById("aritimetica-");
    TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2menos.style.color = TextoAritimetica;
    TeclasAritimeticas2menos.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2menos.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2menos.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */
    

    var TeclasAritimeticas2mais = document.getElementById("aritimetica+");
    TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2mais.style.color = TextoAritimetica;
    TeclasAritimeticas2mais.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2mais.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2mais.addEventListener('mouseleave', removerHoverCorTecla1);


  

    /* Texto -*/

    var Calc = document.getElementById("calc");
    Calc.style.color = TextoAritimetica;

    var theme = document.getElementById("theme");
    theme.style.color = TextoAritimetica;

    var telaConta = document.getElementById("tela");
    telaConta.style.color = TextoAritimetica;

    var Mar = document.getElementById("mar1");
    Mar.style.color = TextoAritimetica;

    var Mar2 = document.getElementById("mar2");
    Mar2.style.color = TextoAritimetica;

    var Mar3 = document.getElementById("mar3");
    Mar3.style.color = TextoAritimetica;


    movimento2.removeEventListener("click", tema1);
    movimento2.addEventListener("click", function() {
        tema3();
      });
  
    function tema3() {
      var movimento3 = document.getElementById("on");
      movimento3.style.marginLeft = "50px";
      movimento3.classList = "on3";

       /* TODAS AS CORES tema 3*/
    FundoCorpo = "hsl(268, 75%, 9%)"; /* ------------------------Cor do body */
    FundoTeclado = "hsl(268, 71%, 12%)";/* -----------------------Cor fundo teclado*/
    FundoTela = "hsl(268, 71%, 12%)";/*---------------------------Cor fundo da tela em que aparece o calculo */
    DelReset = "hsl(281, 89%, 26%)";/* ------------------------Cor das teclas Del e Reset*/
    DelResetSombra = "hsl(285, 91%, 52%)";/* ------------------Cor do boder das teclas Del e Reset*/
    TextoDelReset = "hsl(0, 0%, 100%)"; /*---------------------Cor do texto Del e Reset */
    TeclaIgual = "hsl(176, 100%, 44%)";/* ------------------------Cor da tecla igual */
    TeclaIgualSombra = "hsl(177, 92%, 70%)";/* ------------------Cor do boder da tecla igual*/
    TeclasAritimeticas = "hsl(268, 47%, 21%)";/* ------------------Cor das teclas da aritimetica */
    TextoAritimetica = "hsl(52, 100%, 62%)";/* -------------------Cor do texto das teclas aritimetica*/
    TeclasAritimeticasSombra = "hsl(290, 70%, 36%)";/* -----------Cor do boder da tecla aritimetica*/
    TextoTeclaIgual = "hsl(198, 20%, 13%)";

    TeclasAritimeticasHover = "#6b34ac";/* ------------Cor hover aritimetica*/
    DelResetHover = "#8631b0";/* ------------Cor hover DelReset*/
    TeclaIgualHover = "#94fff9";/* ------------Cor hover igual*/



    /* Fundos */
    var CorCorpo2 = document.getElementById("corpo");
    
    CorCorpo2.style.backgroundColor = FundoCorpo;

    var FundoTeclado2 = document.getElementById("teclas");
    
    FundoTeclado2.style.backgroundColor = FundoTeclado;

    var FundoTela2 = document.getElementById("tela");
    
    FundoTela2.style.backgroundColor = FundoTela;

    var FundoTela02 = document.getElementById("display");
    FundoTela02.style.backgroundColor = FundoTela;

    var celetor = document.getElementById("tema");
    celetor.style.backgroundColor = FundoTela;

      /* Teclas chaves */
    var DelReset2 = document.getElementById("apagar-d");
    
    DelReset2.style.backgroundColor = DelReset;
    DelReset2.style.borderColor = DelResetSombra;
    DelReset2.style.color = TextoDelReset;
     // Hover
     var hoverCorTecla12 = function(event) {
      DelReset2.style.backgroundColor = DelResetHover;
    };

    DelReset2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      DelReset2.style.backgroundColor = DelReset;

    };
      
    DelReset2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */

    var DelResetr2 = document.getElementById("reset");
    DelResetr2.style.backgroundColor = DelReset;
    DelResetr2.style.borderColor = DelResetSombra;
    DelResetr2.style.color = TextoDelReset;
    // Hover
    var hoverCorTecla12 = function(event) {
      DelResetr2.style.backgroundColor = DelResetHover;
    };

    DelResetr2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      DelResetr2.style.backgroundColor = DelReset;

    };
      
    DelResetr2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */



    var TeclaIgual2 = document.getElementById("igual");
    TeclaIgual2.style.backgroundColor = TeclaIgual;
    TeclaIgual2.style.borderColor = TeclaIgualSombra;
    TeclaIgual2.style.color = TextoTeclaIgual;

    // Hover
    var hoverCorTecla12 = function(event) {
      TeclaIgual2.style.backgroundColor = TeclaIgualHover;
    };

    TeclaIgual2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      TeclaIgual2.style.backgroundColor = TeclaIgual;

    };
      
    TeclaIgual2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */

    var TeclasAritimeticas21 = document.getElementById("aritimetica1");
    TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas21.style.color = TextoAritimetica;
    TeclasAritimeticas21.style.borderColor = TeclasAritimeticasSombra;

    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas21.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas21.addEventListener('mouseleave', removerHoverCorTecla1);
    
    var TeclasAritimeticas22 = document.getElementById("aritimetica2");
    TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas22.style.color = TextoAritimetica;
    TeclasAritimeticas22.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas22.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas22.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas23 = document.getElementById("aritimetica3");
    TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas23.style.color = TextoAritimetica;
    TeclasAritimeticas23.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas23.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas23.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas24 = document.getElementById("aritimetica4");
    TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas24.style.color = TextoAritimetica;
    TeclasAritimeticas24.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas24.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas24.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas25 = document.getElementById("aritimetica5");
    TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas25.style.color = TextoAritimetica;
    TeclasAritimeticas25.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas25.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas25.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas26 = document.getElementById("aritimetica6");
    TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas26.style.color = TextoAritimetica;
    TeclasAritimeticas26.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas26.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas26.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas27 = document.getElementById("aritimetica7");
    TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas27.style.color = TextoAritimetica;
    TeclasAritimeticas27.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas27.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas27.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas28 = document.getElementById("aritimetica8");
    TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas28.style.color = TextoAritimetica;
    TeclasAritimeticas28.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas28.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas28.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas29 = document.getElementById("aritimetica9");
    TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas29.style.color = TextoAritimetica;
    TeclasAritimeticas29.style.borderColor = TeclasAritimeticasSombra;

    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas29.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas29.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas20 = document.getElementById("aritimetica0");
    TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas20.style.color = TextoAritimetica;
    TeclasAritimeticas20.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas20.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas20.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2ponto = document.getElementById("aritimetica.");
    TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2ponto.style.color = TextoAritimetica;
    TeclasAritimeticas2ponto.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2ponto.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2ponto.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */


    var TeclasAritimeticas2dividir = document.getElementById("aritimetica/");
    TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2dividir.style.color = TextoAritimetica;
    TeclasAritimeticas2dividir.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2dividir.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2dividir.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2vezes = document.getElementById("aritimetica*");
    TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2vezes.style.color = TextoAritimetica;
    TeclasAritimeticas2vezes.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2vezes.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2vezes.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2menos = document.getElementById("aritimetica-");
    TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2menos.style.color = TextoAritimetica;
    TeclasAritimeticas2menos.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2menos.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2menos.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */
    

    var TeclasAritimeticas2mais = document.getElementById("aritimetica+");
    TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2mais.style.color = TextoAritimetica;
    TeclasAritimeticas2mais.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2mais.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2mais.addEventListener('mouseleave', removerHoverCorTecla1);


  

    /* Texto -*/

    var Calc = document.getElementById("calc");
    Calc.style.color = TextoAritimetica;

    var theme = document.getElementById("theme");
    theme.style.color = TextoAritimetica;

    var telaConta = document.getElementById("tela");
    telaConta.style.color = TextoAritimetica;

    var Mar = document.getElementById("mar1");
    Mar.style.color = TextoAritimetica;

    var Mar2 = document.getElementById("mar2");
    Mar2.style.color = TextoAritimetica;

    var Mar3 = document.getElementById("mar3");
    Mar3.style.color = TextoAritimetica;




      movimento3.removeEventListener("click", tema3);
      movimento3.addEventListener("click", function() {
        tema1();
      });
  
    }
  
    function tema1() {
      var movimento0 = document.getElementById("on");
      movimento0.style.marginLeft = "4px";
      movimento0.classList = "on";

       /* TODAS AS CORES tema 1*/
    FundoCorpo = "hsl(222, 26%, 31%)"; /* ------------------------Cor do body */
    FundoTeclado = "hsl(223, 31%, 20%)";/* -----------------------Cor fundo teclado*/
    FundoTela = "hsl(224, 36%, 15%)";/*---------------------------Cor fundo da tela em que aparece o calculo */
    DelReset = "hsl(225, 21%, 49%)";/* ------------------------Cor das teclas Del e Reset*/
    DelResetSombra = "hsl(224, 28%, 35%)";/* ------------------Cor do boder das teclas Del e Reset*/
    TextoDelReset = "#fbffff"; /*---------------------Cor do texto Del e Reset */
    TeclaIgual = "hsl(6, 63%, 50%)";/* ------------------------Cor da tecla igual */
    TeclaIgualSombra = "hsl(6, 70%, 34%)";/* ------------------Cor do boder da tecla igual*/
    TeclasAritimeticas = "hsl(30, 25%, 89%)";/* ------------------Cor das teclas da aritimetica */
    TextoAritimetica = "hsl(223, 31%, 20%)";/* -------------------Cor do texto das teclas aritimetica*/
    TeclasAritimeticasSombra = "hsl(28, 16%, 65%)";/* -----------Cor do boder da tecla aritimetica*/
    TextoTeclaIgual = "hsl(30, 25%, 89%)";

    TeclasAritimeticasHover = "#ffffff";/* ------------Cor hover aritimetica*/
    DelResetHover = "#a2b3e1";/* ------------Cor hover DelReset*/
    TeclaIgualHover = "#f96c5b";/* ------------Cor hover igual*/



    /* Fundos */
    var CorCorpo2 = document.getElementById("corpo");
    
    CorCorpo2.style.backgroundColor = FundoCorpo;

    var FundoTeclado2 = document.getElementById("teclas");
    
    FundoTeclado2.style.backgroundColor = FundoTeclado;

    var FundoTela2 = document.getElementById("tela");
    
    FundoTela2.style.backgroundColor = FundoTela;

    var FundoTela02 = document.getElementById("display");
    FundoTela02.style.backgroundColor = FundoTela;

    var celetor = document.getElementById("tema");
    celetor.style.backgroundColor = FundoTela;

      /* Teclas chaves */
    var DelReset2 = document.getElementById("apagar-d");
    
    DelReset2.style.backgroundColor = DelReset;
    DelReset2.style.borderColor = DelResetSombra;
    DelReset2.style.color = TextoDelReset;
     // Hover
     var hoverCorTecla12 = function(event) {
      DelReset2.style.backgroundColor = DelResetHover;
    };

    DelReset2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      DelReset2.style.backgroundColor = DelReset;

    };
      
    DelReset2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */

    var DelResetr2 = document.getElementById("reset");
    DelResetr2.style.backgroundColor = DelReset;
    DelResetr2.style.borderColor = DelResetSombra;
    DelResetr2.style.color = TextoDelReset;
    // Hover
    var hoverCorTecla12 = function(event) {
      DelResetr2.style.backgroundColor = DelResetHover;
    };

    DelResetr2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      DelResetr2.style.backgroundColor = DelReset;

    };
      
    DelResetr2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */



    var TeclaIgual2 = document.getElementById("igual");
    TeclaIgual2.style.backgroundColor = TeclaIgual;
    TeclaIgual2.style.borderColor = TeclaIgualSombra;
    TeclaIgual2.style.color = TextoTeclaIgual;

    // Hover
    var hoverCorTecla12 = function(event) {
      TeclaIgual2.style.backgroundColor = TeclaIgualHover;
    };

    TeclaIgual2.addEventListener('mouseover', hoverCorTecla12);

    var removerHoverCorTecla12 = function(event) {
      TeclaIgual2.style.backgroundColor = TeclaIgual;

    };
      
    TeclaIgual2.addEventListener('mouseleave', removerHoverCorTecla12);
    /*------------------------- */

    var TeclasAritimeticas21 = document.getElementById("aritimetica1");
    TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas21.style.color = TextoAritimetica;
    TeclasAritimeticas21.style.borderColor = TeclasAritimeticasSombra;

    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas21.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas21.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas21.addEventListener('mouseleave', removerHoverCorTecla1);
    
    var TeclasAritimeticas22 = document.getElementById("aritimetica2");
    TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas22.style.color = TextoAritimetica;
    TeclasAritimeticas22.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas22.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas22.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas22.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas23 = document.getElementById("aritimetica3");
    TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas23.style.color = TextoAritimetica;
    TeclasAritimeticas23.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas23.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas23.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas23.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas24 = document.getElementById("aritimetica4");
    TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas24.style.color = TextoAritimetica;
    TeclasAritimeticas24.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas24.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas24.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas24.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas25 = document.getElementById("aritimetica5");
    TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas25.style.color = TextoAritimetica;
    TeclasAritimeticas25.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas25.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas25.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas25.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas26 = document.getElementById("aritimetica6");
    TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas26.style.color = TextoAritimetica;
    TeclasAritimeticas26.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas26.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas26.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas26.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas27 = document.getElementById("aritimetica7");
    TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas27.style.color = TextoAritimetica;
    TeclasAritimeticas27.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas27.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas27.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas27.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas28 = document.getElementById("aritimetica8");
    TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas28.style.color = TextoAritimetica;
    TeclasAritimeticas28.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas28.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas28.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas28.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas29 = document.getElementById("aritimetica9");
    TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas29.style.color = TextoAritimetica;
    TeclasAritimeticas29.style.borderColor = TeclasAritimeticasSombra;

    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas29.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas29.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas29.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas20 = document.getElementById("aritimetica0");
    TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas20.style.color = TextoAritimetica;
    TeclasAritimeticas20.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas20.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas20.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas20.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2ponto = document.getElementById("aritimetica.");
    TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2ponto.style.color = TextoAritimetica;
    TeclasAritimeticas2ponto.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2ponto.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2ponto.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2ponto.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */


    var TeclasAritimeticas2dividir = document.getElementById("aritimetica/");
    TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2dividir.style.color = TextoAritimetica;
    TeclasAritimeticas2dividir.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2dividir.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2dividir.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2dividir.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2vezes = document.getElementById("aritimetica*");
    TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2vezes.style.color = TextoAritimetica;
    TeclasAritimeticas2vezes.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2vezes.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2vezes.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2vezes.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */

    var TeclasAritimeticas2menos = document.getElementById("aritimetica-");
    TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2menos.style.color = TextoAritimetica;
    TeclasAritimeticas2menos.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2menos.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2menos.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2menos.addEventListener('mouseleave', removerHoverCorTecla1);
    /*------------------------- */
    

    var TeclasAritimeticas2mais = document.getElementById("aritimetica+");
    TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticas;
    TeclasAritimeticas2mais.style.color = TextoAritimetica;
    TeclasAritimeticas2mais.style.borderColor = TeclasAritimeticasSombra;
    // Hover
    var hoverCorTecla1 = function(event) {
      TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticasHover;
    };

    TeclasAritimeticas2mais.addEventListener('mouseover', hoverCorTecla1);

    var removerHoverCorTecla1 = function(event) {
      TeclasAritimeticas2mais.style.backgroundColor = TeclasAritimeticas;

    };
      
    TeclasAritimeticas2mais.addEventListener('mouseleave', removerHoverCorTecla1);


  

    /* Texto -*/

    var Calc = document.getElementById("calc");
    Calc.style.color = TextoDelReset;

    var theme = document.getElementById("theme");
    theme.style.color = TextoDelReset;

    var telaConta = document.getElementById("tela");
    telaConta.style.color = TextoDelReset;

    var Mar = document.getElementById("mar1");
    Mar.style.color = TextoDelReset;

    var Mar2 = document.getElementById("mar2");
    Mar2.style.color = TextoDelReset;

    var Mar3 = document.getElementById("mar3");
    Mar3.style.color = TextoDelReset;




      movimento0.removeEventListener("click", tema3);
      movimento0.addEventListener("click", function() {
        tema2();
      });
    }
  
  }
  

  
  
  
  