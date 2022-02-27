/* Algoritmo para evaluar si la nota es aprobada o no, 
e indica el ezfuerzo que debe realizar el alumno en 
caso de no haber aprobado. Se aprueba con 7 */

const notaExamenFinal = [6, 4, 8, 9, 3, 10, 5];

for ( let i = 0; i < 7; i++ ) {
    console.log( notaExamenFinal[i] );
    if ( notaExamenFinal[i] <= 4 ) {
        console.log( `Tu nota fue un ${notaExamenFinal[i]}, tenés que esforzarte mucho más.` );
    } else if ( ( notaExamenFinal[i] > 4 ) && ( notaExamenFinal[i] < 7 ) ) {
        console.log( `Tu nota fue un ${notaExamenFinal[i]}, tenés que esforzarte un poco más.` );
    } else 
        console.log( `Tu nota fue un ${notaExamenFinal[i]}, te felicito!, estás aprobado.` );
}
