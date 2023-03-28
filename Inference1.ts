function power(base:number, pow:number){
    var final = 1;
    var i = 1;
    for(i;i<=pow;i++){
        final = final * base;
    }
    return final;
}
var num:number = power(10,2);
console.log("The output of the function is" + num);