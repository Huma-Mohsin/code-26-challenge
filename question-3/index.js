// //Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
//solution
function declarationsGettingSquare(anynumber) {
    return anynumber * anynumber;
}
console.log("square of a number by function expression is:-", declarationsGettingSquare(9));
//above is function declaration.
//function expression is as:-
//function expressions that are stored in variables and are called using the variable name.
var functionExpression = function (anynumber) {
    return anynumber * anynumber;
};
console.log("square of a number by function expression is:-", functionExpression(9));
//Author-HUMA MOHSIN
