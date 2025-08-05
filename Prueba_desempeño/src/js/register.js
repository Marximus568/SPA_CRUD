import { router } from "../router";
//Register configuration with its validations
export async function settingsRegister() {
    const endintAppointmentsUser = "http://localhost:3000/user";
    const $email = document.getElementById("email");
    const $password = document.getElementById("password");
    const $register_btn = document.getElementById("register-btn");

    $register_btn.addEventListener("click", function (event) {
        event.preventDefault();
        createU()
    })
   //Create a new element
    async function createU() {
        const email = $email.value.trim();
        const password = $password.value;
        const role = "user";

        const packer = {
            email,
            password,
            role
        }
        try {
            //Checking that the email does not exist
            const checkEmail = await fetch(`http://localhost:3000/user?email=${email}`);
            const data = await checkEmail.json();

            if (data.length === 1) {
                alert("Account does exist");
                return;
            }
            //send new information
            let response = await fetch(endintAppointmentsUser, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(packer)
            })
            if (!email && !password) {
                alertError("The fields cannot be empty.")
                throw new Error(response.statusText)
            }
            if (!response.ok) {
                alertError("Sorry. Please try again later.")
                throw new Error(response.statusText)
            }else {
                alertSuccess("Sorry. Please try again later.")
            }
        } catch {
            console.error(error);
            alert("There was an error.");
        }
    }
}



