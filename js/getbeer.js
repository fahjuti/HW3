
let getBeerAPI = function getBeerAPI(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        let result = "";
        document.getElementById("num").innerHTML = response.length;
        for (let i = 0; i < response.length; i++) {
            result += "<div class='col-lg-4'><b>Name:</b>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br><b>Tagline:</b>" + response[i].tagline+"<br><b>First brewed:</b>"+ response[i].first_brewed+"<br><b>Yeast:</b>"+ response[i].ingredients.yeast+ "<br><b>Description:</b>"+response[i].description+"<hr></div>";
        }
        document.getElementById("beers").innerHTML = result;
    });
  };

  let getYeast = function getYeast(name) {
    return fetch('https://api.punkapi.com/v2/beers/?yeast=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        let result = "";
        document.getElementById("num").innerHTML = response.length;
        for (let i = 0; i < response.length; i++) {
            result += "<div class='col-lg-4'><b>Name:</b>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br><b>Tagline:</b>" + response[i].tagline+"<br><b>First brewed:</b>"+ response[i].first_brewed+"<br><b>Yeast:</b>"+ response[i].ingredients.yeast+ "<br><b>Description:</b>"+response[i].description+"<hr></div>";
        }
        document.getElementById("beers").innerHTML = result;
    });
  };

  let getBeerYeast = function getBeerYeast(name,yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (let i = 0; i < response.length; i++) {
            result += "<div class='col-lg-4'><b>Name:</b>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br><b>Tagline:</b>" + response[i].tagline+"<br><b>First brewed:</b>"+ response[i].first_brewed+"<br><b>Yeast:</b>"+ response[i].ingredients.yeast+ "<br><b>Description:</b>"+response[i].description+"<hr></div>";
        }
        document.getElementById("beers").innerHTML = result;
  
    });
  };

  var findBeer = function findBeer(name,yeast){
    if (yeast != "" && name != "") {
        getBeerYeast(name,yeast);
    } else if (yeast != "") {
        getYeast(yeast);
    } else if (name != "") {
        getBeerAPI(name);
    } else {
        location.reload();
    }
  }