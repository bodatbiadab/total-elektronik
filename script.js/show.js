const apiUrl = "http://totalelek.totalelek.kencang.id/v1/getall";
let capek = "";

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen HTML yang akan menampilkan data
  const dataContainer = document.getElementById("data-container");

  // URL API yang akan diambil data

  // Mendapatkan nilai dari parameter 'value'

  // Log nilai 'value' ke konsol
  // Gunakan fetch untuk melakukan permintaan ke API
  fetch(apiUrl)
    .then((response) => {
      // Periksa apakah respons dari API berhasil (status code 200)
      //   console.log(response.json().then((d) => console.log(d)));

      // Parse respons sebagai JSON
      response.json().then((data) => {
        // dataContainer.innerHTML = "";
        capek = data;
        console.log(data);
        // Iterasi melalui setiap produk dan tambahkan ke elemen HTML
        let i = 1;
        data.data.forEach((produk) => {
          dataContainer.innerHTML += ` <tr class="table-active">
          <th scope="row">${i}</th>
          <td class="table-active">${produk.nama}</td>
          <td>${produk.kategori}</td>
          <td>${produk.harga}</td>
          <td>${produk.deskripsi}</td>
          <td>
            <img
              src="${produk.nama_photo}"
              class="img-fluid"
              style="max-width: 200px"
              alt=""
            />
          </td>
          <td><button onclick="deleteProduct('${produk.id}')" >DELETE</button></td>
        </tr>`;
          i++;
        });
      });
      //   console.log(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      dataContainer.innerHTML = "Error fetching data from the API";
    });
});
