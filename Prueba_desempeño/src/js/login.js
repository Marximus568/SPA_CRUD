import { router } from "../router";

export async function settingsLogin() {
  //Checking if the user is logged in
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario) {
    history.pushState({}, "", "/dashboard");
    router();
    return;
  }

  const $loginbtn = document.getElementById("form");


  $loginbtn.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    //Comprobation of information
    try {
      const response = await fetch(`http://localhost:3000/user?email=${email}`);
      const data = await response.json();

      if (data.length === 0) {
        alert("Operation incompleted");
        return;
      }

      const usuario = data[0];

      // verificatioln of the password
      if (usuario.password !== password) {
        alert("Incorrect password");
        return;
      }

      //Creation the localStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));
      history.pushState({}, "", "/dashboard");
      router();
    } catch (error) {
      console.error("Error:", error);
      alert("Error the conexion");
    }

  });
}
