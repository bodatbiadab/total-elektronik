// Fungsi untuk mengirim permintaan DELETE ke server
const baseUrl = "https://totalelek.totalelek.kencang.id/v1/delete";
async function deleteProduct(productId) {
  // Buat URL lengkap untuk produk yang akan dihapus
  const deleteUrl = `${baseUrl}/${productId}`;
  console.log(deleteUrl);
  // Konfigurasi permintaan DELETE
  const deleteRequest = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(data),  // Jika ada data yang perlu dikirimkan dalam body
  };

  // Kirim permintaan DELETE menggunakan fetch
  await fetch(deleteUrl, deleteRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data berhasil dihapus:", data);
      // Tambahkan logika atau pembaruan halaman sesuai kebutuhan
      window.location = window.location;
    })
    .catch((error) => {
      console.error("Error:", error);
      // Tambahkan penanganan kesalahan sesuai kebutuhan
    });

  showUrl(deleteUrl);
}

const showUrl = (url) => {
  return url;
};
