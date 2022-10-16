function requestListener () {
  console.log(this.responseText);
}

const request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
request.open("GET", "https://api.github.com/users/alabak48");
request.send();