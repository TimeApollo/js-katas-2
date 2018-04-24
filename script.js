console.log("Add function");
function add(x,y){
    return x + y;
}
console.log(add(2,4));

console.log("multiply function");
function multiply(x,y){
    var sum=0;
    for(var i=0;i<x;i++){
        sum = add(sum,y);
    }
    return sum;
}
console.log(multiply(6,8));

console.log("Power function");
function power(x,n){
    pow = 1;
    for(var i=0; i<n; i++){
        pow = multiply(pow,x);
    }
    return pow;
}
console.log(power(2,8));

console.log("factorial function");
function factorial(x){
    var fact = 1;
    for(var i=1; i<=x;i++){
        fact = multiply(fact,i);
    }
    return fact;
}
console.log(factorial(4));

console.log("fibonacci function");
function fibonacci(n){
    var fibprev = 1;
    var fibfirst = 0;
    if(n===1){
        fib=fibfirst;
    }else if(n===2){
        fib=fibprev;
    }else{
        for(var i=2;i<n;i++){
            fib=add(fibprev,fibfirst);
            fibfirst=fibprev;
            fibprev = fib;
        }
    }
    return fib;
}
console.log(fibonacci(8));