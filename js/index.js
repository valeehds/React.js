function promedio(){
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var examenParcial = parseInt(document.getElementById("examenParcial").value);
    var trabajoFinal = parseInt(document.getElementById("trabajoFinal").value);
    
    if (nota1 >= 10 && nota1 <= 50 && nota2 >= 10 && nota2 <= 50 && nota3 >= 10 && 
    nota3 <= 50 && examenParcial >= 10 && examenParcial <= 50 && trabajoFinal >= 10 && trabajoFinal <=50) {
        prom = (nota1+nota2+nota3)/3
        puntajeFinal = prom*0.55;
        puntajeExamen = examenParcial*0.3;
        puntajeTrabajo = trabajoFinal *0.15;
        notaFinal =  puntajeFinal + puntajeExamen + puntajeTrabajo;
        
        notaFinal = notaFinal.toFixed(2)

        document.getElementById("notaFinal").value = notaFinal;
    }
    else {
        alert('Las notas deben estar entre 10 y 50');
    }
}

