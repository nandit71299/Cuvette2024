function example() {
  return console.log("hello");
}
function setTimeOutExample() {
  return setTimeout(() => {
    return console.log("hello");
  }, 3000);
}

example();
setTimeOutExample();
