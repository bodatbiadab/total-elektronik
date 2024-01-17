const apiUrl = "https://totalelek.totalelek.kencang.id/v1/";
let capek = "";
let on = false;

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen HTML yang akan menampilkan data
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

  // URL API yang akan diambil data

  // Gunakan fetch untuk melakukan permintaan ke APi
  fetch(apiUrl + "getall")
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
        data.data.forEach((produk) => {
          if (produk.kategori === "ac") {
            dataContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.nama_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">${produk.nama}</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori === "laptop-computer") {
            laptopContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.nama_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori === "home appliance") {
            HAContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.nama_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori === "cabel") {
            CBContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.nama_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori === "tv") {
            tvContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.nama_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          } else if (produk.kategori === "etc") {
            etcContainer.innerHTML += `
            <div class="menu-card">
            <img src="${
              produk.nama_photo
            }" alt="Air Conditioner" class="menu-card-img">
            <h3 class="menu-card-title">"${produk.nama}"</h3>
            <p class="menu-card-price">"${formatRupiah(produk.harga)}"</p>
          </div>
        `;
          }
        });
      });
      //   console.log(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      dataContainer.innerHTML = "Error fetching data from the API";
    });
});
