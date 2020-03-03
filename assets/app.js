"use strict";

$(document).ready(function() {
  
  /* déclaration des rendements euros de 2000 à 2018 */
  var eurosTab = [5.3,5.3,4.8,4.5,4.4,4.2,4.1,4.1,4.0,3.6,3.4,3.0,2.9,2.8,2.5,2.3,1.9,1.8,1.8];
  
  /* déclaration des performances moyennes des unités de compte de 2000 à 2018 */
  var UcTab = [-2.0,-9.5,-15.2,8.4,6.4,14.4,8.8,1.5,-22.3,14.4,5.2,-7,11.0,8.2,5.9,4.1,3.9,5.3,-8,9];

  /* Déclaration des valeurs /mois et /anniversaire */
  var sommeMois = 10;
  var sommeAnniversaire = 100;
  
  /* Déclaration des parts fonds euros et unités de compte ¨*/
  var partEuros = 81.93;
  var partUc = 18.07;

  /* Déclaration des différents frais prélevés */
  var fraisSouscription = 2.5;
  var fraisGestion = 0.7;
  var impot = 17.2;

  /* Calculs de la simulation : Etape 2000 COURT */
  var calcul = (sommeAnniversaire+sommeMois*12)*(1-(fraisSouscription/100));
  console.log(calcul);

  calcul = ((calcul*(partEuros/100))*(1+(eurosTab[0]/100)))+((calcul*(partUc/100))*(1+(UcTab[0]/100)));
  console.log(calcul);

  calcul = calcul*(1-(fraisGestion/100));
  console.log(calcul);

  /* Calculs de la simulation : Etapes 2001 à 2018 BROUILLON*/
  var i = 1;
  while (i<=18) {
  calcul = calcul+((sommeAnniversaire+sommeMois*12)*(1-(fraisSouscription/100)));

  calcul = ((calcul*(partEuros/100))*(1+(eurosTab[i]/100)))+((calcul*(partUc/100))*(1+(UcTab[i]/100)));

  calcul = calcul*(1-(fraisGestion/100));

  console.log(calcul);

  i++;

  }

  console.log('total brut : '+calcul);


  });

