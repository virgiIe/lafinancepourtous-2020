"use strict";

  // déclarations des rendements euros et des performances moyennes des unités de compte de 2000 à 2018
    var eurosTab = [5.3,5.3,4.8,4.5,4.4,4.2,4.1,4.1,4.0,3.6,3.4,3.0,2.9,2.8,2.5,2.3,1.9,1.8,1.8], ucTab = [-2.0,-9.5,-15.2,8.4,6.4,14.4,8.8,1.5,-22.3,14.4,5.2,-7,11.0,8.2,5.9,4.1,3.9,5.3,-8.9];

  // déclarations des valeurs /mois et /anniversaire DEFAULT
    var sommeMois = Number, sommeAnniversaire = Number;
  
    // déclarations des parts fonds euros et unités de compte DEFAULT
    var partEuros = 81.93, partUc = 18.07;
  
    // déclaration des différents frais prélevés DEFAULT
    var fraisSouscription = 2.5, fraisGestion = 0.7, impot = 17.2;


$(document).ready(function() {
  

  // ZONE MOIS _ Input + Boutons

    sommeMois = $("#inputMontantMois").val();
    sommeMois = parseInt(sommeMois);
    $("#inputMontantMois").val(sommeMois)


      $("#inputMontantMois").on("keyup",function(){
        if ($("#inputMontantMois").val()<0) {
          sommeMois = 0;
        } else {
          sommeMois = $("#inputMontantMois").val();
        }
        sommeMois = parseInt(sommeMois);
        $("#inputMontantMois").val(sommeMois)
        // console.log (sommeMois);
      });


        $("#boutonMoisMoins1").on("click",function(){
          if (sommeMois<1) {
            sommeMois = 0;
          } else {
          sommeMois = sommeMois-1;
          }
          $("#inputMontantMois").val(sommeMois);
          // console.log (sommeMois);
        });

        $("#boutonMoisPlus1").on("click",function(){
          sommeMois = sommeMois+1;
          $("#inputMontantMois").val(sommeMois);
          // console.log (sommeMois);
        });


        $("#boutonMoisMoins10").on("click",function(){
          if (sommeMois<10) {
            sommeMois = 0;
          } else {
          sommeMois = sommeMois-10;
          }
          $("#inputMontantMois").val(sommeMois);
          // console.log (sommeMois);
        });

        $("#boutonMoisPlus10").on("click",function(){
          sommeMois = sommeMois+10;
          $("#inputMontantMois").val(sommeMois);
          // console.log (sommeMois);
        });


        $("#boutonMoisMoins100").on("click",function(){
          if (sommeMois<100) {
            sommeMois = 0;
          } else {
          sommeMois = sommeMois-100;
          }
          $("#inputMontantMois").val(sommeMois);
          // console.log (sommeMois);

        });

        $("#boutonMoisPlus100").on("click",function(){
          sommeMois = sommeMois+100;
          $("#inputMontantMois").val(sommeMois);
          // console.log (sommeMois);
        });





  // ZONE ANNIVERSAIRE _ Input + Boutons

    sommeAnniversaire = $("#inputMontantAnniversaire").val();
    sommeAnniversaire = parseInt(sommeAnniversaire);
    $("#inputMontantAnniversaire").val(sommeAnniversaire)
  
    
      $("#inputMontantAnniversaire").on("keyup",function(){
        if ($("#inputMontantAnniversaire").val()<0) {
          sommeAnniversaire = 0;
        } else {
          sommeAnniversaire = $("#inputMontantAnniversaire").val();
        }
        sommeAnniversaire = parseInt(sommeAnniversaire);
        $("#inputMontantAnniversaire").val(sommeAnniversaire)
        // console.log (sommeAnniversaire);
      });
  
  
        $("#boutonAnniversaireMoins1").on("click",function(){
          if (sommeAnniversaire<1) {
            sommeAnniversaire = 0;
          } else {
          sommeAnniversaire = sommeAnniversaire-1;
          }
          $("#inputMontantAnniversaire").val(sommeAnniversaire);
          // console.log (sommeAnniversaire);
        });
  
        $("#boutonAnniversairePlus1").on("click",function(){
          sommeAnniversaire = sommeAnniversaire+1;
          $("#inputMontantAnniversaire").val(sommeAnniversaire);
          // console.log (sommeAnniversaire);
        });
  
  
        $("#boutonAnniversaireMoins10").on("click",function(){
          if (sommeAnniversaire<10) {
            sommeAnniversaire = 0;
          } else {
          sommeAnniversaire = sommeAnniversaire-10;
          }
          $("#inputMontantAnniversaire").val(sommeAnniversaire);
          // console.log (sommeAnniversaire);
        });
  
        $("#boutonAnniversairePlus10").on("click",function(){
          sommeAnniversaire = sommeAnniversaire+10;
          $("#inputMontantAnniversaire").val(sommeAnniversaire);
          // console.log (sommeAnniversaire);
        });
  
  
        $("#boutonAnniversaireMoins100").on("click",function(){
          if (sommeAnniversaire<100) {
            sommeAnniversaire = 0;
          } else {
          sommeAnniversaire = sommeAnniversaire-100;
          }
          $("#inputMontantAnniversaire").val(sommeAnniversaire);
          // console.log (sommeAnniversaire);
  
        });
  
        $("#boutonAnniversairePlus100").on("click",function(){
          sommeAnniversaire = sommeAnniversaire+100;
          $("#inputMontantAnniversaire").val(sommeAnniversaire);
          // console.log (sommeAnniversaire);
        });





  // Interaction Bouton Calculer -> Calculs du Total + Investi Brut + Gagné Net + (A AJOUTER) Surlignement d'une ligne du tableau
  $("#calculer").on("click",function(){

    var resultatTotal = calculSimulation (sommeMois,sommeAnniversaire,partEuros,partUc,fraisSouscription,fraisGestion,impot);
    console.log (resultatTotal);
    $("#id-total").val(resultatTotal);
    // CHANGER console.log PAR $("----").val() = resultatTotal


    var resultatBrut = calculInvestissemenBrut (sommeMois,sommeAnniversaire);
    console.log(resultatBrut);
    $("#id-totalInvestis").val(resultatBrut);

    var resultatNet = calculGagneNet (resultatTotal,resultatBrut);
    console.log(resultatNet);
    $("#id-totalGagne").val(resultatNet);

  });



  
  











  
  












  
  
  









  // PARTIE ALGORITHMES

    // fonction qui calcule le montant investi brut
    function calculInvestissemenBrut (sommeMois,sommeAnniversaire) {

      var investissementBrut = ((sommeMois*12)+sommeAnniversaire)*18;

      return investissementBrut.toFixed(2);
    }




    // fonction qui calcule le montant gagné net
    function calculGagneNet (resultatTotal,resultatBrut) {
      var gagneNet = resultatTotal-resultatBrut;

      return gagneNet.toFixed(2);
    }



    // fonction qui calcule la simulation par rapports aux paramètres définis
    function calculSimulation (sommeMois,sommeAnniversaire,partEuros,partUc,fraisSouscription,fraisGestion,impot) {

      var i = 0;
      var calcul = 0;
    
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
    
      return calcul.toFixed(2);
      }





  });