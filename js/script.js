// Dati del form
var formNome = document.getElementById('formNome');
var formKm = document.getElementById('formKm');
var formEta = document.getElementById('formEta');
var buttonGenera = document.getElementById('formGenera');
var buttonAnnulla = document.getElementById('formAnnulla');

// Dati del biglietto
var biglNome = document.getElementById('biglNome');
var biglOfferta = document.getElementById('biglOfferta');
var biglCarrozza = document.getElementById('biglCarrozza');
var biglCodiceCp = document.getElementById('biglCodiceCp');
var biglCostoBiglietto = document.getElementById('biglCostoBiglietto');
var biglietto = document.getElementById('biglietto');

// Eventi al click di genera
buttonGenera.addEventListener('click',
  function () {
    // Comparsa del biglietto
    biglietto.className = biglietto.classList + ' visible';

    // Compilazione nome biglietto
    biglNome.innerHTML = formNome.value;
    biglNome.className = 'bold';

    // Compilazione offerta biglietto
    biglOfferta.innerHTML = formEta.value;

    // Compilazione carrozza
    biglCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;

    // Compilazione codice cp
    biglCodiceCp.innerHTML = Math.floor(Math.random() * 100000) + 1;

    // Compilazione costo biglietto
    var prezzoIntero = (formKm.value * 0.21).toFixed(2);

    if (formEta.value == 'Minorenni') {
      var prezzoMinorenni = (prezzoIntero - (prezzoIntero * 20 / 100)).toFixed(2);
      biglCostoBiglietto.innerHTML = prezzoMinorenni + ' €';
    } else if (formEta.value == 'Anziani') {
      var prezzoAnziani = (prezzoIntero - (prezzoIntero * 40 / 100)).toFixed(2);
      biglCostoBiglietto.innerHTML = prezzoAnziani + ' €';
    } else {
      biglCostoBiglietto.innerHTML = prezzoIntero + ' €';
    }
  }
);

// Eventi al click di annulla
buttonAnnulla.addEventListener('click',
  function () {
    // Scomparsa del biglietto
    biglietto.className = 'dettagliBiglietto hidden';
    // Cancellazione nome
    formNome.value = '';
    biglNome.innerHTML = '';

    // Cancellazione offerta
    formEta.value = 'Intero';
    biglOfferta.innerHTML = '';

    // Cancellazione carrozza
    biglCarrozza.innerHTML = '';

    // Cancellazione codice cp
    biglCodiceCp.innerHTML = '';

    // Cancellazione costo biglietto e numero chilometri
    biglCostoBiglietto.innerHTML = '';
    formKm.value = '';
  }
);
