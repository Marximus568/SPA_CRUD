import { router } from "../router";
import { CRUD } from "./gestion_datos";
//Function for route dashboard and It is senttingsDashboard 
export async function senttingsDashboard() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (!usuario) {
    history.pushState({}, "", "/login");
    router("/login");
    return;
  }
  //For remove the localStorage
  const $logout = document.getElementById("logout");

 $logout.addEventListener("click", function () {
      localStorage.removeItem("usuario");
      history.pushState({}, "", "/login");
      router(); 
    })


//render the table
CRUD()

}

