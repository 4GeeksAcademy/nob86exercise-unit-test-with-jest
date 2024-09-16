const {fromDollarToYen, fromYenToPound} = require('./app.js');
 const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

   
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});


test('Convierte 1 dólar a yenes', () => {   
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); 
});
test('Convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56); 
});