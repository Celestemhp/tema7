//Lyt efter klik på alle elementer
øl.addEventListener("mousedown", klik_øl);
snaps.addEventListener("mousedown", klik_snaps);
faxe.addEventListener("mousedown", klik_faxe);
sodavand.addEventListener("mousedown", klik_sodavand);

function mousedown() {
  if (mousedown) {
    console.log("indeholder alkohol");
}
else {
    console.log("none");
}
}

function klik_øl() {

  if (mousedown) {
      console.log("indeholder alkohol");
  }
  else {
      console.log("none");
  }
} 
function klik_snaps() {

  if (mousedown) {
      console.log("indeholder alkohol");
  }
  else {
      console.log("none");
  }
} 

function klik_faxe() {

  if (mousedown) {
      console.log("alkoholfri");
  }
  else {
      console.log("none");
  }
} 

function klik_sodavand() {

  if (mousedown) {
      console.log("alkoholfri");
  }
  else {
      console.log("none");
  }
} 