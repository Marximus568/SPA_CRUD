
import "tailwindcss";
import { router } from "../router";
//For the window to be displayed according to the url
window.addEventListener('popstate', router);
window.addEventListener('load', router);

router()

// program execution
document.addEventListener("click", function (event) {
    if (event.target.matches('[data-link]')) {
        event.preventDefault()
        history.pushState(null, null, event.target.href);
        router();
    }
})
