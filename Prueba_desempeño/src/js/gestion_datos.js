export async function CRUD() {
  const endintAppointments = "http://localhost:3000/events"
  const $eventName = document.getElementById("eventName");
  const $description = document.getElementById("description")
  const $capacity = document.getElementById("capacity");
  const $date = document.getElementById("date");
  const $form = document.getElementById("form");

  let editingId = null;

  readWindows()

  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (editingId) {
      updateElement(editingId);
    } else createAppointment();
  });

  //Create a new appointment
  async function createAppointment() {

    const eventName = $eventName.value.trim();
    const description = $description.value;
    const capacity = Number($capacity.value);
    const date = $date.value;

    //The sender information
    const datesObject = {
      eventName,
      description,
      capacity,
      date
    };
    try {
      let response = await fetch(endintAppointments, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(datesObject)
      })
      if (capacity < 1) {
        alertError("Numbers less than 0 are not allowed.")
        throw new Error(response.statusText)
      }
      if (!response.ok) {
        alertError("Sorry. Please try again later.")
        throw new Error(response.statusText)
      } else {
        alertSuccess("Sorry. Please try again later.")
      }
      $form.reset();
      await readWindows();
    } catch (error) {
      console.log(error.message)
    }

  }
  //Read
  async function readWindows() {
    try {
      const response = await fetch(endintAppointments);
      const data = await response.json();
      renderInventory(data);
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
    }
  }


  //Update (to fill in the form data)
  async function updatePut(id) {
    try {
      const response = await fetch(`${endintAppointments}/${id}`);
      const item = await response.json();

      $eventName.value = item.eventName;
      $description.value = item.description;
      $capacity.value = item.capacity;
      $date.value = item.date;

      editingId = id;
    } catch (error) {
      console.error("Failed to load item for editing:", error);
    }
  }
  //Update
  async function updateElement(id) {
    // Step 1: Validate input
    const eventName = $eventName.value.trim();
    const description = $description.value;
    const capacity = Number($capacity.value);
    const date = $date.value;

    if (!eventName || !description) {
      alert("Customer and product fields cannot be empty.");
      return;
    }

    if (isNaN(capacity) || capacity <= 0) {
      alert("Quantify must be a number greater than 0.");
      return;
    }

    // Step 2: Create the object
    const datesObject = {
      eventName,
      description,
      capacity,
      date
    };

    try {
      // Step 3: Send PUT to API
      const response = await fetch(`${endintAppointments}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datesObject)
      });

      if (!response.ok) {
        throw new Error("Error updating the item");
      }

      // Step 4: Reset form and refresh inventory
      $form.reset();
      
      await readWindows();

    } catch (error) {
      console.error(error);
      alert("There was an error updating the item.");
    }
  }
  //Delete a appointment
  async function deleteElement(id) {
    try {
      await fetch(`${endintAppointments}/${id}`, {
        method: "DELETE"
      });
      await readWindows();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  }

  function renderInventory(data) {
    const container = document.getElementById("renderTable");
    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="id">#${item.id}</div>
        <p><strong>Event:</strong> ${item.eventName}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Date:</strong> ${item.description}</p>
        <p><strong>Capacity:</strong> ${item.capacity}</p>
        <div class="actions">
            <button class="edit">Editar</button>
            <button class="delete">Eliminar</button>
        </div>
        `;

      card.querySelector(".edit").addEventListener("click", () => updatePut(item.id));
      card.querySelector(".delete").addEventListener("click", () => deleteElement(item.id));

      container.appendChild(card);
    });
  }
}


