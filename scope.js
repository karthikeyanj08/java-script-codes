let g=0;//global variable
function increment()
{
    g+=2;
    console.log("g is: "+g);
    let f=1;//local variable
    f++;
    console.log("value of f : "+f);

}
increment();
increment();
g++, 
console.log("updated value: "+g);
//console.log("updated value: "+f);

//hoisting
sum= a+b;
console.log(sum);
var a=9, b=10, sum;//NaN, undefined,infinity

var c,d,sub;//declaration
c=10, d=10;//intialization
sub=c+d;
c=90, d=9;
console.log(sub);

//self invoking function-recursion

function multiply()
{
    let b=1;
    b*=5;
    console.log(b);
    while(i<=2){
    return multiply();
    i++
    }
}
multiply();

//factorial of a number 5!=5*4*3*2*1
function factorial(num)
{
    //num*num 1 *num 2
    let fact=1;
    for(let i=num;i>0;i--)
    {
        return fact=fact(i)*fact(i-1);
        if(i==1)
        return 1;
    }
}