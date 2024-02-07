// function findSum(n){
// let ans = 0;
// for(let i=1; i<=n; i++){
//     ans = ans +i;
// }
// console.log(ans);
// }

// findSum(10)

function square(n){
    return n*n;
}

function findSumofSquare(a,b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    console.log(val1+ val2); 
}

findSumofSquare(10,10, square);
