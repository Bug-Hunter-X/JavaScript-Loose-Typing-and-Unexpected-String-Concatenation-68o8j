function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){return a+b;}else if(typeof a === 'string' && typeof b === 'number'){return parseInt(a)+b;}else if(typeof a === 'number' && typeof b === 'string'){return a+parseInt(b);}else{return a.toString()+b.toString();}
}
console.log(foo(2,3));//Expected output:5
console.log(foo(2,"3"));//Expected output:5
console.log(foo("2",3));//Expected output:5
console.log(foo("2","3"));//Expected output:5