$(document).ready(function() {
    // Getting references to the name inout and product container, as well as the table body.
    // the id product-name is user input on the browser.
    var nameInput = $("#product-name");
    // HTML tag called tbody
    var productList = $("tbody");
    var productContainer = $(".product-container");

    // Getting the intiial list of Products
    getProducts();

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getProducts() {
      $.get("/api/products", function(data) {

        renderProductList();
        // the follow line empties the input box.
        nameInput.val("");
      });
    }

    // A function for rendering the list of authors to the page
    function renderProductList(rows) {
      productList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        productList.prepend(rows);
      }
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("product");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/product/" + id
      })
      .then(getProduct);
    }
  });
