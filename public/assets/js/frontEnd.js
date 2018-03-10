var confrimDiv = document.getElementById('needsName');

        // data request for JSON from front end
        var btn = document.getElementById('btn');


        btn.addEventListener('click', function () {
            var ourRequest = new XMLHttpRequest();

            ourRequest.open('get', './project2/getJSONmodule.html');
            ourRequest.onload = function () {
                ourRequest = JSON.parse(ourRequest.responseText);
                // console.log(ourRequest.responseText);
            };
        });
        // parse Response for confirmation & Sequelization
        var scanItem = {
            upc: testJSON.results[0].upc,
            image_url: testJSON.results[0].images,
            brand: testJSON.results[0].brand,
            name: testJSON.results[0].name,
            category: testJSON.results[0].category,
                test: "test"
        };
           //scanItem.send
            // Send parsed response back to front end
            // function renderJSON(scanItem) {
            //     scanItem = "";
            // }


            var url = '/api/scan'; //endpoint in your node server
            $("#quantity_btn").click(function (event) {//"#quanity_btn" ID for button to submit 
                console.log("clicked");
                console.log($("#quantityInput").val());
                scanItem.quantity = $("#quantity").val();
                console.log(scanItem);
                $.ajax({
                    type: "POST",
                    url: url,
                    data: scanItem,
                    success: function (res) { console.log(res); }
                    //dataType: dataType
                });

            });

$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
    var quantityInput = $("#quantityInput");
    var quantityList = $("tbody");
    var quantityContainer = $(".quantity-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("click", "#addbtn", handleQuantitySubmit);
    // $(document).on("click", ".delete-author", handleDeleteButtonPress);
    
    // Getting the intiial list of Authors
    getProducts();
    
    // A function to handle what happens when the form is submitted to create a new Author
    function handleQuantitySubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!quantityInput.val().trim().trim()) {
        return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertProduct({
        quantity: quantityInput
            .val()
            .trim()
        });

    }
    
    // A function for creating an author. Calls getAuthors upon completion
    function upsertProdcut(productData) {
        $.post("/api/products", productData)
        .then(getProducts);
        console.log(productData);
    }
    
    // // Function for creating a new list row for authors
    // function createAuthorRow(authorData) {
    //     var newTr = $("<tr>");
    //     newTr.data("author", authorData);
    //     newTr.append("<td>" + authorData.name + "</td>");
    //     newTr.append("<td> " + authorData.Posts.length + "</td>");
    //     newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    //     newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    //     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    //     return newTr;
    // }
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getProducts() {
      $.get("/api/products", function(data) {

        renderProductList();
        // the follow line empties the input box.
        nameInput.val("");
      });
    }

    // A function for rendering the list of authors to the page
    // function renderProductList(rows) {
    //   productList.children().not(":last").remove();
    //   authorContainer.children(".alert").remove();
    //   if (rows.length) {
    //     console.log(rows);
    //     productList.prepend(rows);
    //   }
    // }

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