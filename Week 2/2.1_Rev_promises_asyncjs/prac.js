console.log("at the top 1");

function promisifiedtimeout() {
    console.log("function called 3");
    return new Promise(function (resolve){
        console.log("inside the promise 4");
        setTimeout(() => {
            console.log("inside settimeout 5")
            resolve("done baby! I am burnt out...")
        }, 5000);
    })
}

console.log("in the middle 2");
promisifiedtimeout().then(function(value){
    console.log("promisified then 6");
    console.log(value);
})