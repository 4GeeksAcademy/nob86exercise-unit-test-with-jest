const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));



function fromEuroToDollar(euros) {
    const conversionRate = 1.07;
    return euros * conversionRate;
}






// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}

// Función para convertir de yenes a libras
function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs.JPY;
    let libras = euros * oneEuroIs.GBP;
    return libras;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };