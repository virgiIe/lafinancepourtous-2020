"use strict";

$(document).ready(function() {
  
  // déclarations des rendements euros et des performances moyennes des unités de compte de 2000 à 2018
  var eurosTab = [5.3,5.3,4.8,4.5,4.4,4.2,4.1,4.1,4.0,3.6,3.4,3.0,2.9,2.8,2.5,2.3,1.9,1.8,1.8], ucTab = [-2.0,-9.5,-15.2,8.4,6.4,14.4,8.8,1.5,-22.3,14.4,5.2,-7,11.0,8.2,5.9,4.1,3.9,5.3,-8.9];

  var sommeMois, sommeAnniversaire, partEuros, partUc, fraisSouscription,fraisGestion,impot,i;

  function calculSimulation () {

  // déclarations des valeurs /mois et /anniversaire DEFAULT
    //sommeMois = $("#sommeMois").val()
  sommeMois = 10, sommeAnniversaire = 100;
  
  // déclarations des parts fonds euros et unités de compte DEFAULT
  partEuros = 81.93, partUc = 18.07;

  // déclaration des différents frais prélevés DEFAULT
  fraisSouscription = 2.5, fraisGestion = 0.7, impot = 17.2;

  // calculs de la simulation : Etapes 2000 à 2018 BRUT

  i = 0;

  while (i<=18) {

    if (i>0) {
      calcul = calcul+((sommeAnniversaire+sommeMois*12)*(1-(fraisSouscription/100)));
    } else {
      var calcul = (sommeAnniversaire+sommeMois*12)*(1-(fraisSouscription/100));
    }

    calcul = ((calcul*(partEuros/100))*(1+(eurosTab[i]/100)))+((calcul*(partUc/100))*(1+(ucTab[i]/100)));

    calcul = calcul*(1-(fraisGestion/100));

    //console.log(calcul);

    i++;

  }

    //console.log('total brut : '+calcul);

  // calcul total NET
  calcul = ((sommeAnniversaire+sommeMois*12)*18)+(calcul-((sommeAnniversaire+sommeMois*12)*18))*(1-(impot/100));

    //console.log('total net : '+calcul);

  return calcul
  }

  calculSimulation ();

  $("#startCalcul").on("click",function(){
    var resultat = calculSimulation ();
    console.log(resultat);
  });

  });