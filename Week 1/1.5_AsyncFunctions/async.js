function yashAsync() {
  var d = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("hi there");
    }, 1000);
  });
  return d;
}

async function main() {
    let value = await yashAsync()
    console.log(value);
    console.log("hi there1");
}

main()