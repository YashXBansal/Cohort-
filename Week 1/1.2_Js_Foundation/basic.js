function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

const value = calculateArithmetic(11, 2, add);
console.log(value);

console.log("Print: My name is Yash Bansal ")