import { senttingsDashboard } from "./js/dashboard";
import { settingsLogin } from "./js/login";
import { settingsRegister } from "./js/register";
import { render404 } from "./views/404";
import { renderDashboard } from "./views/adminviews";;
import { renderHome } from "./views/home";
import { renderLogin } from "./views/login";
import { renderRegister } from "./views/register";
import { renderUserviews } from "./views/userviews";
//Routes for SPA and it is configuration
const routes = {
  "/": {
      showView : renderHome,
      afterRender: "",
      private: false
  },
  "/home":  {
      showView : renderHome,
      afterRender: "",
      private: false
  },
  "/dashboard":  {
      showView : renderDashboard,
      afterRender: senttingsDashboard,
      private: true
  },
  "/login":  {
      showView : renderLogin,
      afterRender: settingsLogin,
      private: false
  },
  "/notFound":  {
      showView : render404,
      afterRender: "",
      private: false
  },
   "/register":  {
      showView : renderRegister,
      afterRender: settingsRegister,
      private: false
  }
};

//For that the routes can be observed
export function router(){
  const path = window.location.pathname || "/notFound";
  const app = document.getElementById('app');
  const currentRoute = routes[path];

  if(currentRoute){
    app.innerHTML = currentRoute.showView();
    if(typeof currentRoute.afterRender() === 'function'){
      currentRoute.afterRender;
    }
  }else {
    app.innerHTML = render404();
}
}