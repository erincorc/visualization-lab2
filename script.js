// TODO: load the dataset
let attractions;
fetch("attractions.json")
  .then(response => response.json())
  .then(data => {
    attractions = data;
    console.log("attractions", attractions);
    attractions.sort(function(a, b) {
      let attracA = a.Visitors;
      let attracB = b.Visitors;
      if (attracA < attracB) return 1;
      if (attracA > attracB) return -1;
      return 0;
    });
    let short = attractions.slice(0,5); 
    console.log("short array", short);
    renderBarChart(short); //rendering our initial 'all' chart when we first open web page
  });


function filterData(category) {
 // console.log('made it to the function');
 // console.log(category);
  /* **************************************************
   *
   * TODO: filter attractions by the selected category
   * TODO: filter top 5 attractions
   *
   * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
   *
   * renderBarChart(data)
   *
   * - 'data' must be an array of JSON objects
   * - the max. length of 'data' is 5
   *
   * **************************************************/
  
  // need to fetch the data again because it is asynchronous and undefined if we don't fetch once more
  let attractions;
  fetch("attractions.json")
    .then(response => response.json())
    .then(data => {
      attractions = data;
      //   console.log("attractions", attractions);
      attractions.sort(function(a, b) {
        let attracA = a.Visitors;
        let attracB = b.Visitors;
        if (attracA < attracB) return 1;
        if (attracA > attracB) return -1;
        return 0;
      });
      if (category != "all") { // if we want all categories, don't want to filter b/c 'all' isn't a category  
      let a = attractions.filter(attraction => attraction.Category == category);
      let little = a.slice(0,5);
      renderBarChart(little);
      }
      else renderBarChart(attractions.slice(0,5));
    });
  
  }

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let cat;
cat = document.querySelector("#attraction-category").addEventListener("change", function() {
  filterData(event.target.value);
});

