window.addEventListener("load", () => {
  const p = new Promise(() => {
    fetch("https://intense-escarpment-96361.herokuapp.com/");
  }).then(() => {
    debugger;
  });
});
