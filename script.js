// Variables
const   peonBlack_1 = document.querySelector(".peon-black-1"),
        peonBlack_2 = document.querySelector(".peon-black-2"),
        peonBlack_3 = document.querySelector(".peon-black-3"),
        peonBlack_4 = document.querySelector(".peon-black-4"),
        peonBlack_5 = document.querySelector(".peon-black-5"),
        peonBlack_6 = document.querySelector(".peon-black-6"),
        peonBlack_7 = document.querySelector(".peon-black-7"),
        peonBlack_8 = document.querySelector(".peon-black-8"),
        caballoBlack_1 = document.querySelector(".caballo-black-1"),
        caballoBlack_2 = document.querySelector(".caballo-black-2");

const   peonWhite_1 = document.querySelector(".peon-white-1"),
        peonWhite_2 = document.querySelector(".peon-white-2"),
        peonWhite_3 = document.querySelector(".peon-white-3"),
        peonWhite_4 = document.querySelector(".peon-white-4"),
        peonWhite_5 = document.querySelector(".peon-white-5"),
        peonWhite_6 = document.querySelector(".peon-white-6"),
        peonWhite_7 = document.querySelector(".peon-white-7"),
        peonWhite_8 = document.querySelector(".peon-white-8"),
        caballoWhite_1 = document.querySelector(".caballo-white-1"),
        caballoWhite_2 = document.querySelector(".caballo-white-2");

const jugar = document.querySelector("#jugar");

jugar.addEventListener("click", activarAjedrez);

function activarAjedrez() {
    document.querySelector("#jugar").classList.add("green");
    // Piezas negras
    peonBlack_1.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".a6").classList.toggle("green"); 
        document.querySelector(".a5").classList.toggle("green");
    });
    peonBlack_2.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".b6").classList.toggle("green"); 
        document.querySelector(".b5").classList.toggle("green");
    });
    peonBlack_3.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".c6").classList.toggle("green"); 
        document.querySelector(".c5").classList.toggle("green");
    });
    peonBlack_4.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".d6").classList.toggle("green"); 
        document.querySelector(".d5").classList.toggle("green");
    });
    peonBlack_5.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".e6").classList.toggle("green"); 
        document.querySelector(".e5").classList.toggle("green");
    });
    peonBlack_6.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".f6").classList.toggle("green"); 
        document.querySelector(".f5").classList.toggle("green");
    });
    peonBlack_7.addEventListener("click",()=>{
        classGreen()
        document.querySelector(".g6").classList.toggle("green"); 
        document.querySelector(".g5").classList.toggle("green");
    });
    peonBlack_8.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".h6").classList.toggle("green"); 
        document.querySelector(".h5").classList.toggle("green");
    });
    caballoBlack_1.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".a6").classList.toggle("green");
        document.querySelector(".c6").classList.toggle("green"); 
    });
    caballoBlack_2.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".f6").classList.toggle("green");
        document.querySelector(".h6").classList.toggle("green"); 
    });

    // Piezas blancas
    peonWhite_1.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".a3").classList.toggle("green");
        document.querySelector(".a4").classList.toggle("green");
    });

    peonWhite_2.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".b3").classList.toggle("green"); 
        document.querySelector(".b4").classList.toggle("green");
    });
    peonWhite_3.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".c3").classList.toggle("green"); 
        document.querySelector(".c4").classList.toggle("green");
    });
    peonWhite_4.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".d3").classList.toggle("green"); 
        document.querySelector(".d4").classList.toggle("green");
    });
    peonWhite_5.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".e3").classList.toggle("green"); 
        document.querySelector(".e4").classList.toggle("green");
    });
    peonWhite_6.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".f3").classList.toggle("green"); 
        document.querySelector(".f4").classList.toggle("green");
    });
    peonWhite_7.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".g3").classList.toggle("green"); 
        document.querySelector(".g4").classList.toggle("green");
    });
    peonWhite_8.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".h3").classList.toggle("green"); 
        document.querySelector(".h4").classList.toggle("green");
    });
    caballoWhite_1.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".a3").classList.toggle("green");
        document.querySelector(".c3").classList.toggle("green"); 
    });
    caballoWhite_2.addEventListener("click",()=>{
        classGreen();
        document.querySelector(".f3").classList.toggle("green");
        document.querySelector(".h3").classList.toggle("green"); 
    });
}


// Funciones
const filas = document.querySelectorAll(".filas");
// Itera por cada fila y columna para remover las casillas marcadas
function classGreen() {
    filas.forEach(fila => {
        for (let i = 0; i < fila.children.length; i++) {
            fila.children[i].classList.remove("green");
        }  
    });
}
