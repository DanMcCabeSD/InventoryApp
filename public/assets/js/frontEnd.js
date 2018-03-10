$(document).ready(function() {
    var quantityInput = $("#quantityInput");
    
    var scanItem = {
        upc: "12312441244",
        image_url: "testJSON.results[0].images",
        brand: "Coca-Cola",
        name: "Coca-Cola Classic",
        category: "Beverage",
    };

    getProducts();

    products = [];
    // This adds quantity into the scanItem object.
    var url = '/api/products'; //endpoint in your node server
    $("#addbtn").click(function (event) {//"#quanity_btn" ID for button to submit 
        console.log("clicked");
        console.log($("#quantityInput").val());
        scanItem.quantity = $("#quantityInput").val();
        console.log(scanItem);
        $.ajax({
            type: "POST",
            url: url,
            data: scanItem,
            success: function (res) { console.log(res); }
            //dataType: dataType
        });

    });

    console.log(scanItem)

    function getProducts() {
        $.get("api/products", function(data) {
            products = data;
            console.log(data);
        });
    }


});






























// var confrimDiv = document.getElementById('needsName');

//         // data request for JSON from front end
//         var btn = document.getElementById('btn');


//         btn.addEventListener('click', function () {
//             var ourRequest = new XMLHttpRequest();

//             ourRequest.open('get', './project2/getJSONmodule.html');
//             ourRequest.onload = function () {
//                 ourRequest = JSON.parse(ourRequest.responseText);
//                 // console.log(ourRequest.responseText);
//             };
//         });
//         // parse Response for confirmation & Sequelization
        // var scanItem = {
        //     upc: "12312441244",
        //     image_url: "testJSON.results[0].images",
        //     brand: "Coca-Cola",
        //     name: "Coca-Cola Classic",
        //     category: "Beverage",
        // };
//            //scanItem.send
//             // Send parsed response back to front end
//             // function renderJSON(scanItem) {
//             //     scanItem = "";
//             // }


            // var url = '/api/scan'; //endpoint in your node server
            // $("#quantity_btn").click(function (event) {//"#quanity_btn" ID for button to submit 
            //     console.log("clicked");
            //     console.log($("#quantityInput").val());
            //     scanItem.quantity = $("#quantity").val();
            //     console.log(scanItem);
            //     $.ajax({
            //         type: "POST",
            //         url: url,
            //         data: scanItem,
            //         success: function (res) { console.log(res); }
            //         //dataType: dataType
            //     });

            // });

// $(document).ready(function() {
//     // Getting references to the name inout and author container, as well as the table body
//     var quantityInput = $("#quantityInput");
//     var quantityList = $("tbody");
//     var quantityContainer = $(".quantity-container");
//     // Adding event listeners to the form to create a new object, and the button to delete
//     // an Author
//     $(document).on("click", "#addbtn", handleQuantitySubmit);
//     // $(document).on("click", ".delete-author", handleDeleteButtonPress);

//     // Getting the intiial list of Authors
//     getProducts();

//     // A function to handle what happens when the form is submitted to create a new Author
//     function handleQuantitySubmit(event) {
//         event.preventDefault();
//         // Don't do anything if the name fields hasn't been filled out
//         // if (!quantityInput.val().trim()) {
//         // return;
//         // }
//         // Calling the upsertAuthor function and passing in the value of the name input
//         upsertProduct({
//         quantity: quantityInput
//             .val() || ''
//         });

//     }

//     // A function for creating an author. Calls getAuthors upon completion
//     function upsertProduct(productData) {
//         $.post("/api/products", productData)
//         .then(getProducts);
//         console.log(productData);
//     }

//     // Function for retrieving authors and getting them ready to be rendered to the page
//     function getProducts() {
//       $.get("/api/products", function(data) {

//         // renderProductList();
//         // the follow line empties the input box.
//         quantityInput.val("");
//       });
//     }

//     // Function for handling what happens when the delete button is pressed
//     function handleDeleteButtonPress() {
//       var listItemData = $(this).parent("td").parent("tr").data("product");
//       var id = listItemData.id;
//       $.ajax({
//         method: "DELETE",
//         url: "/api/product/" + id
//       })
//       .then(getProduct);
//     }
//   });