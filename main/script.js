var axios = require("axios")
axios.get("http://api.tvmaze.com/singlesearch/shows?q="+ "cars").then(
            function(response) {
                var km = {}
                for (var key in response.data) { 
                    km[key] =response.data[key]
                }
                console.log(km)
                $('#bg').text(response.data)
                //console.log("The "+ inquirerResponse.lookup + " info is: " + JSON.stringify(response.data));
                //storeData(JSON.stringify(response.data));          
            });