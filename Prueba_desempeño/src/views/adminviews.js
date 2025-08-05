export function renderDashboard(){
  return `
   <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button data-link="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./src/image/logo.webp" class="h-20 w-20" alt="Logo" />
        </button>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <button id="logout" class="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
  Cerrar sesión
  </button>
  <main>
        <form id="form" class="" >
            <label>Event name</label>
            <input type="text" id="eventName" class="border-5 flex justify-center rounded-md
"required>
            <label>Description</label>
            <input type="text" id="description" class="border-5 flex justify-center rounded-md
" required>
            <label>Capacity</label>
            <input type="number" id="capacity" class="border-5 flex justify-center rounded-md
" required>
            <label>Date</label>
            <input type="date" id="date" class="border-5 flex justify-center" required>
            <input type="submit"class="border-5 flex justify-center rounded-md
" >
        </form>
        <h2>Available event</h2>
        <div id="renderTable"></div>
  
  </main>
   <footer class="bg-white border-gray-200 dark:bg-gray-900 flex justify-center items-end">
    <h1 class="text-white">@ Derechos reservados</h1>
  </footer>`
}
