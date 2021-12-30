const username = document.querySelector(".user");
const password = document.querySelector(".pass");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (username.value == "ahmad2021" && password.value == "novelty") {
    alert("Login Sucess")
  } else if (username.value != "ahmad2021" && password.value == "novelty") {
    alert("Username or password not corret")
  } else if (username.value == "ahmad2021" && password.value != "novelty") {
    alert("Username or password not corret")
  } else {
    alert(`No have account ?`);
  }
})