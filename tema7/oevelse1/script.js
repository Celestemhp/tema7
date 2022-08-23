document.querySelector("øl").addEventListener("click", tjek);
document.querySelector("snaps").addEventListener("click", tjek);
document.querySelector("faxe").addEventListener("click", tjek);
document.querySelector("sodavand").addEventListener("click", tjek);

function tjek() {
  console.log("this.alt");
  if (this.alt == "øl" || this.alt == "snaps") {
      console.log("indeholder alkohol");
  }
  else {
    console.log("alkoholfri");
  }
}