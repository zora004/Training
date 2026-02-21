doSomething1(a, b, c);
function doSomething1(a, b, c) {
  axios.get("/some/url");
}

// Instead of calling the API directly, provide (or inject) a function to do it:

const getData = (url) => axios.get(url);
doSomething(a, b, c, getData);
function doSomething(x, y, z, getter) {
  // ...
  getter("/some/url");
  // ....
}
