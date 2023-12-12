const Master = {
  async render() {
    return `
    <div class="flex flex-col gap-2 mt-2">
      <a
          href="#/master/admins"
          class="flex max-w-sm items-center justify-center rounded-lg bg-gray-50 p-4 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="material-symbols-outlined mr-4"> group </span>
          <span class="flex-grow text-lg font-semibold">Data Admin</span>
          <span class="material-symbols-outlined"> arrow_outward </span>
      </a>      
      <a
          href="#/master/nurses"
          class="flex max-w-sm items-center justify-center rounded-lg bg-gray-50 p-4 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="material-symbols-outlined mr-4"> group </span>
          <span class="flex-grow text-lg font-semibold">Data Perawat</span>
          <span class="material-symbols-outlined"> arrow_outward </span>
      </a>      
      <a
          href="#/master/doctors"
          class="flex max-w-sm items-center justify-center rounded-lg bg-gray-50 p-4 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="material-symbols-outlined mr-4"> group </span>
          <span class="flex-grow text-lg font-semibold">Data Dokter</span>
          <span class="material-symbols-outlined"> arrow_outward </span>
      </a>      
      <a
          href="#/master/users"
          class="flex max-w-sm items-center justify-center rounded-lg bg-gray-50 p-4 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="material-symbols-outlined mr-4"> settings_account_box </span>
          <span class="flex-grow text-lg font-semibold">Pengguna Aplikasi</span>
          <span class="material-symbols-outlined"> arrow_outward </span>
      </a>      
    </div>
    `;
  },
};

export default Master;
