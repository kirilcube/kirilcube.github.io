window.addEventListener("load", () => {
  const p = new Promise(() => {
    fetch("https://faceit-get-data.herokuapp.com//");
  }).then(() => {
    debugger;
  });
});

var xhr = new XMLHttpRequest();

var body = JSON.stringify("Mirage");

xhr.open("POST", "/submit", true);

xhr.onreadystatechange = aadsds => {
  debugger;
};

xhr.send(body);
