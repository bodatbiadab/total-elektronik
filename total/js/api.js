document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON file
  fetch("http://localhost:6969/product")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Manipulate the DOM to display the data
      var imageUrl = `Produk/Peralatan Masak/${data[2].link_photo}`;
      addImageToDOM(imageUrl);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });

  // Function to display data in the HTML
  //   function displayData(data) {
  //     var dataContainer = document.getElementById("data-container");

  //     // Example: Display data in a table
  //     var table = document.createElement("table");

  //     // Create table headers
  //     var headerRow = table.createTHead().insertRow(0);
  //     Object.keys(data[0]).forEach(function (key) {
  //       var th = document.createElement("th");
  //       th.textContent = key;
  //       headerRow.appendChild(th);
  //     });

  //     // Populate table with data
  //     data.forEach(function (item) {
  //       var row = table.insertRow();
  //       Object.values(item).forEach(function (value) {
  //         var cell = row.insertCell();
  //         cell.textContent = value;
  //       });
  //     });

  //     dataContainer.appendChild(table);
  //   }

  function addImageToDOM(src) {
    var imageContainer = document.getElementById("image-container");

    // Create an image element
    var imgElement = document.createElement("img");

    // Set the src attribute
    imgElement.src = src;

    // Append the image to the container
    imageContainer.appendChild(imgElement);
  }

  // Example usage
});
