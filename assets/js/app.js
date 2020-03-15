"use strict";

// déclarations des rendements euros et des performances moyennes des unités de compte de 2000 à 2018
var eurosTab = [5.3, 5.3, 4.8, 4.5, 4.4, 4.2, 4.1, 4.1, 4.0, 3.6, 3.4, 3.0, 2.9, 2.8, 2.5, 2.3, 1.9, 1.8, 1.8],
  ucTab = [-2.0, -9.5, -15.2, 8.4, 6.4, 14.4, 8.8, 1.5, -22.3, 14.4, 5.2, -7, 11.0, 8.2, 5.9, 4.1, 3.9, 5.3, -8.9];

// déclarations des valeurs /mois et /anniversaire DEFAULT
var sommeMois = 0,
  sommeAnniversaire = 0;

// déclarations des parts fonds euros et unités de compte DEFAULT
var partEuros = 81.93,
  partUc = 18.07;

// déclaration des différents frais prélevés DEFAULT
var fraisSouscription = 2.5,
  fraisGestion = 0.7,
  impot = 17.2;



//déclaration de part fond euro qui se change dans paramètres avancés en %
var partEurosAvances = "";


$(document).ready(function () {


  // Mettre le valeurs des variables dans les inputs
  $("#inputMontantMois").val(0);
  sommeMois = $("#inputMontantMois").val();
  sommeMois = parseInt(sommeMois);
  $("#inputMontantMois").val(sommeMois);

  $("#inputMontantAnniversaire").val(Number);
  sommeAnniversaire = $("#inputMontantAnniversaire").val();
  sommeAnniversaire = parseInt(sommeAnniversaire);
  $("#inputMontantAnniversaire").val(sommeAnniversaire);

  $("#inputFraisSouscription").val(fraisSouscription);
  $("#inputFraisGestion").val(fraisGestion);


  // ZONE MOIS _ Input + Boutons

  $("#inputMontantMois").on("keyup", function () {
    if ($("#inputMontantMois").val() < 0) {
      sommeMois = 0;
    } else {
      sommeMois = $("#inputMontantMois").val();
    }
    sommeMois = parseInt(sommeMois);
    $("#inputMontantMois").val(sommeMois)
    // console.log (sommeMois);
  });


  $("#boutonMoisMoins1").on("click", function () {
    if (sommeMois < 1) {
      sommeMois = 0;
    } else {
      sommeMois = sommeMois - 1;
    }
    $("#inputMontantMois").val(sommeMois);
    // console.log (sommeMois);
  });

  $("#boutonMoisPlus1").on("click", function () {
    sommeMois = sommeMois + 1;
    $("#inputMontantMois").val(sommeMois);
    // console.log (sommeMois);
  });


  $("#boutonMoisMoins10").on("click", function () {
    if (sommeMois < 10) {
      sommeMois = 0;
    } else {
      sommeMois = sommeMois - 10;
    }
    $("#inputMontantMois").val(sommeMois);
    // console.log (sommeMois);
  });

  $("#boutonMoisPlus10").on("click", function () {
    sommeMois = sommeMois + 10;
    $("#inputMontantMois").val(sommeMois);
    // console.log (sommeMois);
  });


  $("#boutonMoisMoins100").on("click", function () {
    if (sommeMois < 100) {
      sommeMois = 0;
    } else {
      sommeMois = sommeMois - 100;
    }
    $("#inputMontantMois").val(sommeMois);
    // console.log (sommeMois);

  });

  $("#boutonMoisPlus100").on("click", function () {
    sommeMois = sommeMois + 100;
    $("#inputMontantMois").val(sommeMois);
    // console.log (sommeMois);
  });





  // ZONE ANNIVERSAIRE _ Input + Boutons    
  $("#inputMontantAnniversaire").on("keyup", function () {
    if ($("#inputMontantAnniversaire").val() < 0) {
      sommeAnniversaire = 0;
    } else {
      sommeAnniversaire = $("#inputMontantAnniversaire").val();
    }
    sommeAnniversaire = parseInt(sommeAnniversaire);
    $("#inputMontantAnniversaire").val(sommeAnniversaire)
    // console.log (sommeAnniversaire);
  });


  $("#boutonAnniversaireMoins1").on("click", function () {
    if (sommeAnniversaire < 1) {
      sommeAnniversaire = 0;
    } else {
      sommeAnniversaire = sommeAnniversaire - 1;
    }
    $("#inputMontantAnniversaire").val(sommeAnniversaire);
    // console.log (sommeAnniversaire);
  });

  $("#boutonAnniversairePlus1").on("click", function () {
    sommeAnniversaire = sommeAnniversaire + 1;
    $("#inputMontantAnniversaire").val(sommeAnniversaire);
    // console.log (sommeAnniversaire);
  });


  $("#boutonAnniversaireMoins10").on("click", function () {
    if (sommeAnniversaire < 10) {
      sommeAnniversaire = 0;
    } else {
      sommeAnniversaire = sommeAnniversaire - 10;
    }
    $("#inputMontantAnniversaire").val(sommeAnniversaire);
    // console.log (sommeAnniversaire);
  });

  $("#boutonAnniversairePlus10").on("click", function () {
    sommeAnniversaire = sommeAnniversaire + 10;
    $("#inputMontantAnniversaire").val(sommeAnniversaire);
    // console.log (sommeAnniversaire);
  });


  $("#boutonAnniversaireMoins100").on("click", function () {
    if (sommeAnniversaire < 100) {
      sommeAnniversaire = 0;
    } else {
      sommeAnniversaire = sommeAnniversaire - 100;
    }
    $("#inputMontantAnniversaire").val(sommeAnniversaire);
    // console.log (sommeAnniversaire);

  });

  $("#boutonAnniversairePlus100").on("click", function () {
    sommeAnniversaire = sommeAnniversaire + 100;
    $("#inputMontantAnniversaire").val(sommeAnniversaire);
    // console.log (sommeAnniversaire);
  });





  // ZONE AVANCES

  // Partition EU / UC
  //Create by Damir (https://codepen.io/drovosek2703/pen/VwYRZrM)
  $('.neumorphic-slider__thumb').on('mousedown', function () {
    $(document).on('mousemove.mm', function (e) {
      var new_value = 0;
      if (e.clientX < $('.neumorphic-slider').offset().left) {
        new_value = '0%';
      } else if (e.clientX > $('.neumorphic-slider').offset().left + $('.neumorphic-slider').width() - 10) {
        new_value = '100%';
      } else {
        new_value = ((e.clientX - $('.neumorphic-slider').offset().left) / ($('.neumorphic-slider').width() - 10) * 100).toFixed(0) + '%';
      }
      document.documentElement.style.setProperty('--value', new_value);
      $('.neumorphic-slider__popover').text(new_value);
      // console.log(new_value);

      partEurosAvances = new_value.replace("%", "");
      // console.log(partEurosAvances);

    });
    $(document).on('mouseup.mu', function () {
      $(document).off('mousemove.mm');
      $('.neumorphic-slider__thumb').off('mouseup.mu');
    });
  });


  // Souscription
  $("#inputFraisSouscription").on("change", function () {
    if ($("#inputFraisSouscription").val() < 0) {
      fraisSouscription = 0;
    } else {
      fraisSouscription = $("#inputFraisSouscription").val();
    }
    parseFloat(fraisSouscription.replace(",", "."));
    $("#inputFraisSouscription").val(fraisSouscription);
    parseFloat(fraisSouscription);
  });


  // Gestion
  $("#inputFraisGestion").on("change", function () {
    if ($("#inputFraisGestion").val() < 0) {
      fraisGestion = 0;
    } else {
      fraisGestion = $("#inputFraisGestion").val();
    }
    parseFloat(fraisGestion.replace(",", "."));
    $("#inputFraisGestion").val(fraisGestion);
    parseFloat(fraisGestion);
  });










  // Interaction Bouton Calculer -> Calculs du Total + Investi Brut + Gagné Net + (A AJOUTER) Surlignement d'une ligne du tableau
  $("#calculer").on("click", function () {

    if (partUeAvancesFunction() >= 0) {
      // console.log('pass');
      partEuros = partEurosAvances;
      console.log(partEuros);
      partUc = 100 - partEurosAvances;
      console.log(partUc);
    } else {
      console.log('else');
    }


    fraisSouscription = fraisSouscriptionFunction();
    fraisSouscription = parseFloat(fraisSouscription);
    console.log(fraisSouscription);


    fraisGestion = fraisGestionFunction();
    fraisGestion = parseFloat(fraisGestion);
    console.log(fraisGestion);




    var resultatTotal = calculSimulation(sommeMois, sommeAnniversaire, partEuros, partUc, fraisSouscription, fraisGestion, impot);
    console.log(resultatTotal);
    $("#id-total").val(resultatTotal);
    // CHANGER console.log PAR $("----").val() = resultatTotal


    var resultatBrut = calculInvestissemenBrut(sommeMois, sommeAnniversaire);
    console.log(resultatBrut);
    $("#id-totalInvestis").val(resultatBrut);

    var resultatNet = calculGagneNet(resultatTotal, resultatBrut);
    console.log(resultatNet);
    $("#id-totalGagne").val(resultatNet);



    resetEchelon();


    addBackground(resultatTotal);



  });










































  // PARTIE ALGORITHMES

  // fonction qui calcule le montant investi brut
  function calculInvestissemenBrut(sommeMois, sommeAnniversaire) {

    var investissementBrut = ((sommeMois * 12) + sommeAnniversaire) * 18;

    return investissementBrut.toFixed(2);
  }




  // fonction qui calcule le montant gagné net
  function calculGagneNet(resultatTotal, resultatBrut) {
    var gagneNet = resultatTotal - resultatBrut;

    return gagneNet.toFixed(2);
  }



  // fonction qui calcule la simulation par rapports aux paramètres définis
  function calculSimulation(sommeMois, sommeAnniversaire, partEuros, partUc, fraisSouscription, fraisGestion, impot) {


    var i = 0;
    var calcul = 0;

    while (i <= 18) {

      if (i > 0) {
        calcul = calcul + ((sommeAnniversaire + sommeMois * 12) * (1 - (fraisSouscription / 100)));
      } else {
        var calcul = (sommeAnniversaire + sommeMois * 12) * (1 - (fraisSouscription / 100));
      }

      calcul = ((calcul * (partEuros / 100)) * (1 + (eurosTab[i] / 100))) + ((calcul * (partUc / 100)) * (1 + (ucTab[i] / 100)));

      calcul = calcul * (1 - (fraisGestion / 100));

      i++;

    }

    // calcul total NET
    calcul = ((sommeAnniversaire + sommeMois * 12) * 18) + (calcul - ((sommeAnniversaire + sommeMois * 12) * 18)) * (1 - (impot / 100));

    return calcul.toFixed(2);
  }





});









function resetEchelon() {

  $(".echelon1").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon1 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon1 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

  $(".echelon2").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon2 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon2 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

  $(".echelon3").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon3 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon3 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

  $(".echelon4").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon4 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon4 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

  $(".echelon5").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon5 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon5 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

  $(".echelon6").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon6 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon6 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

  $(".echelon7").css({
    "color": "#BABECC",
    "background-color": "#ebecf0",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon7 > span:nth-child(2) > p:nth-child(2)").css({
    "color": "#BABECC",
    "text-shadow": "1px 1px 1px #FFF"
  });
  $(".echelon7 > p:nth-child(1)").css({
    "text-shadow": "1px 1px 1px #FFF"
  });

}

function addBackground(resultatTotal) {

  if (resultatTotal >= 226148) {
    $(".echelon1").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon1 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon1 > p:nth-child(1)").css({
      "text-shadow": "none",
    });
  }

  if (90000 <= resultatTotal && resultatTotal < 226148) {
    $(".echelon2").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon2 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon2 > p:nth-child(1)").css({
      "text-shadow": "none",
    });
  }

  if (25000 <= resultatTotal && resultatTotal < 90000) {
    $(".echelon3").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon3 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon3 > p:nth-child(1)").css({
      "text-shadow": "none",
    });
  }


  if (14270 <= resultatTotal && resultatTotal < 25000) {
    $(".echelon4").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon4 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon4 > p:nth-child(1)").css({
      "text-shadow": "none",
    });
  }


  if (7290 <= resultatTotal && resultatTotal < 14270) {
    $(".echelon5").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon5 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon5 > p:nth-child(1)").css({
      "text-shadow": "none",
    });
  }


  if (3960 <= resultatTotal && resultatTotal < 7290) {
    $(".echelon6").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon6 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon6 > p:nth-child(1)").css({
      "text-shadow": "none",
    });
  }




  if (1700 <= resultatTotal && resultatTotal < 3960) {
    $(".echelon7").css({
      "color": "#ebecf0",
      "background-color": "#95b1eb",
      "text-shadow": "none",
    });
    $(".echelon7 > span:nth-child(2) > p:nth-child(2)").css({
      "color": "#ebecf0",
      "text-shadow": "none",
    });
    $(".echelon7 > p:nth-child(1)").css({
      "text-shadow": "none",
    });

  }
}




function partUeAvancesFunction() {
  var partUeAvancesNumber = parseInt(partEurosAvances);
  console.log(partUeAvancesNumber);
  return partUeAvancesNumber;
}

function fraisSouscriptionFunction() {
  var fraisSouscriptionNumber = fraisSouscription.toString().replace(',', '.');
  fraisSouscriptionNumber = parseFloat(fraisSouscriptionNumber);
  console.log(fraisSouscriptionNumber);
  return fraisSouscriptionNumber;
}


function fraisGestionFunction() {
  var fraisGestionNumber = fraisGestion.toString().replace(',', '.');
  fraisGestionNumber = parseFloat(fraisGestionNumber);
  console.log(fraisGestionNumber);
  return fraisGestionNumber;
}