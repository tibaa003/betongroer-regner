var B25 = { sekkVekt: 25000, sekkPris: 89 };

var formEL = document.forms[0];

function submitForm() {
  var diameter = {
    ytre: formEL.ytreDiameter.value,
    indre: formEL.indreDiameter.value,
  };
  var lengde = formEL.lengde.value;

  if (diameter["ytre"] <= diameter["indre"]) {
    alert("ytre diameter kan ikke være mindre eller lik indre diameter");
  } else {
    var volum = volumFunc(diameter, lengde);
    var vekt = volum * 2.4;
    var sekker = Math.ceil(vekt / B25["sekkVekt"]);
    var pris = sekker * B25["sekkPris"];
    print(vekt, sekker, pris);
  }
}

function volumFunc(diameter, lengde) {
  let ytre =
    Math.PI * ((diameter["ytre"] / 2) * (diameter["ytre"] / 2) * lengde);
  let indre =
    Math.PI * ((diameter["indre"] / 2) * (diameter["indre"] / 2) * lengde);
  return ytre - indre;
}

function print(vekt, sekker, pris) {
  var textarea = document.getElementById("textarea");
  tekst =
    "Du trenger " + (vekt / 1000).toFixed(2) + " kg betong type B25. \n\n";
  tekst +=
    "Da trenger du " +
    sekker +
    sekkTekst(sekker) +
    ", det vil koste " +
    pris +
    " kr.";
  textarea.value = tekst;
}

function sekkTekst(sekker) {
  if (sekker == 1) {
    return " sekk";
  } else {
    return " sekker";
  }
}
