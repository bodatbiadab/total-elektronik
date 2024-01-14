// Menangkap elemen formulir pencarian
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const dataContainer = document.getElementById("ac");
const laptopContainer = document.getElementById("laptop");
const HAContainer = document.getElementById("home-applience");
const CBContainer = document.getElementById("cabel");
const tvContainer = document.getElementById("tv");
const etcContainer = document.getElementById("etc");
const mesincuciContainer = document.getElementById("mesincuci");
dataContainer.innerHTML = "";
laptopContainer.innerHTML = "";
HAContainer.innerHTML = "";
CBContainer.innerHTML = "";
tvContainer.innerHTML = "";
etcContainer.innerHTML = "";

// Menambahkan event listener untuk mendengarkan perubahan input

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah formulir dikirim secara default

  const inputValue = searchBox.value.trim(); // Mendapatkan nilai input dan menghapus spasi di awal dan akhir
  console.log("Input Pengguna:", inputValue);
  fetchSearchResults(inputValue);

  // Lakukan pencarian hanya jika nilai input tidak kosong
  if (inputValue !== "") {
    // Lakukan apa pun yang Anda inginkan dengan nilai input, seperti pencarian atau pemfilteran data
    // Misalnya, kirim nilai input ke server untuk pencarian menggunakan fetch API
    // fetchSearchResults(inputValue);
  }
});

// Fungsi untuk melakukan pencarian menggunakan fetch API (contoh)
function fetchSearchResults(query) {
  const apiUrl = "http://localhost:6969/product/search/" + query; // Ganti dengan URL API pencarian Anda
  fetch(apiUrl)
    .then((response) => {
      // Periksa apakah respons dari API berhasil (status code 200)
      //   console.log(response.json().then((d) => console.log(d)));
      function formatRupiah(angka) {
        var reverse = angka.toString().split("").reverse().join(""),
          ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join(".").split("").reverse().join("");
        return "Rp " + ribuan;
      }
      // Parse respons sebagai JSON
      response.json().then((data) => {
        // dataContainer.innerHTML = "";
        capek = data;
        console.log(data);
        // Iterasi melalui setiap produk dan tambahkan ke elemen HTML
        data.forEach((produk) => {
          if (produk.kategori_produk === "ac") {
            dataContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">${produk.nama_produk}</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori_produk === "laptop-computer") {
            laptopContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama_produk}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori_produk === "home appliance") {
            HAContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama_produk}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori_produk === "cabel") {
            CBContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama_produk}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori_produk === "tv") {
            tvContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama_produk}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori_produk === "etc") {
            etcContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama_produk}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori_produk === "mesincuci") {
            mesincuciContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.link_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama_produk}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          }
        });
      });
      //   console.log(data);
    })

    .catch((error) => console.error("Error:", error));
}
