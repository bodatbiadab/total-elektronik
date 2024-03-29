

let photo = "";

let formData = new FormData();
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Mengumpulkan data form berdasarkan atribut 'for'
  formData.append(
    "nama",
    document.querySelector('[for="exampleFormControlInput1"]')
      .nextElementSibling.value
  );
  formData.append(
    "kategori",
    document.querySelector('[for="exampleFormControlInput3"]')
      .nextElementSibling.value
  );
  formData.append(
    "deskripsi",
    document.querySelector('[for="exampleFormControlTextarea1"]')
      .nextElementSibling.value
  );
  formData.append(
    "harga",
    document.querySelector('[for="exampleFormControlInput4"]')
      .nextElementSibling.value
  );
  formData.append(
    "merk",
    document.querySelector('[for="exampleFormControlInput2"]')
      .nextElementSibling.value
  );
  formData.append("photo", document.getElementById("formFile").files[0]);

  photo = formData.get("photo"); // Optional: If you still need to store the file name

  const url = "https://totalelek.totalelek.kencang.id/v1/store";

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Menampilkan respons dari API di dalam elemen dengan id 'result'
      document.getElementById("result").innerHTML = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => console.error("Error:", error));

  // Menampilkan data di konsol
  console.log("Data form:", [...formData.values()]);
  document.getElementById("success-message").style.display = "block";
  document.getElementById("berkas").style.display = "none";

  // Lakukan apa pun yang Anda inginkan dengan data ini (misalnya, tampilkan di halaman, dll.)
});
