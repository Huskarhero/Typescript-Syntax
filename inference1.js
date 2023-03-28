function power(base, pow) {
    var final = 1;
    var i = 1;
    for (i; i <= pow; i++) {
        final = final * base;
    }
    return final;
}
var num = power(10, 2);
console.log("The output of the function is " + num);
