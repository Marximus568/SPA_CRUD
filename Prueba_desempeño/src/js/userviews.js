export async function senttingsUser() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (!usuario) {
    history.pushState({}, "", "/login");
    router("/login");
    return;
  }
}