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
                console.log($("#quantity").val());
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