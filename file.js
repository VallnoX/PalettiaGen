let combinacion = [
  "#7E3AEC", "#0CECDD", "#C400FF", "#FFF338",
  "#FF67E7", "#FF2E9B", "#CEFF05", "#5D00FF",
  "#000000", "#010203", "#0C090A", "#100C08",
  "#121212", "#242124", "#010B13", "#002147",
  "#1D2951", "#232B2B", "#2A3439", "#54626F",
  "#1A1110", "#3D0C02", "#3D2B1F", "#3B3C36",
  "#4B3621", "#534B4F", "#1F262A", "#333333",
  "#343434", "#353839", "#3B444B", "#414A4C",
  "#D8E2DC", "#ECE4DB", "#FFE5D9", "#FFD8D7",
  "#FFCAD4", "#F4ACB7", "#C997A0", "#9D8189",
  "#8E9AAF", "#ADADC1", "#CBC0D3", "#DDCAD5",
  "#EFD3D7", "#F7DFE9", "#DEE2FF", "#D3C3E8",
  "#E8D7FF", "#FFD3E8", "#FFD7D5", "#F9EBDB",
  "#F3FFE1", "#E9FFDC", "#DFFFD6", "#FFEDE1",
  "#F9FBF2", "#E8FAF9", "#D7F9FF", "#C3E2FF",
  "#AFCBFF", "#5F749B", "#0E1C36", "#FFB8D1",
  "#F2B6CA", "#E4B4C2", "#E6C1D3", "#E7CEE3",
  "#E0E1E9", "#DFEFF4", "#DDFDFE"
];

 let card = document.querySelectorAll('.colores');
 let cardp = document.querySelector('.paleta');
 let boton = document.getElementById('gen');
 
function random(){
 card.forEach((cardn)=>{
   let change = Math.floor(Math.random()*(combinacion.length));
   cardn.style.backgroundColor = combinacion[change];
    });
}
 boton.addEventListener('click', random);
 