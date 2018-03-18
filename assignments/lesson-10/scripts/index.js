(function() {

  var section = document.querySelector('main section');

  var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  var request = new XMLHttpRequest();

  request.open('GET', requestURL);

  request.responseType = 'json';

  request.onload = function() {

    var towns = request.response;

    showTowns(towns);

  }

  request.send();



  function showTowns(jsonObj) {

    var towns = jsonObj['towns'];

        

    for (var i = 0; i < towns.length; i++) {

      if (towns[i].name === 'Placerton') continue;

      var a = document.createElement('article');

      var h1 = document.createElement('h1');

      var p1 = document.createElement('p');

      var p2 = document.createElement('p');

      var p3 = document.createElement('p');

      var p4 = document.createElement('p');

      var l = document.createElement('ul');



      h1.textContent = towns[i].name;

      p1.textContent = 'Moto: ' + towns[i].motto;

      p2.textContent = 'Year Founded: ' + towns[i].yearFounded;

      p3.textContent = 'Population: ' + towns[i].currentPopulation;

      p3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

      

          





      a.appendChild(h1);

      a.appendChild(p1);

      a.appendChild(p2);

      a.appendChild(p3);

      a.appendChild(p4);

      a.appendChild(l);



      section.appendChild(a);

    }

  }

})();