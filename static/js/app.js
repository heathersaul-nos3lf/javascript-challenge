
// References to the tbody element, input fields and buttons
let tbody = document.querySelector("tbody");
let dateInput = d3.select("#date");
let cityInput = d3.select("#city");
let stateInput = d3.select("#state");
let countryInput = d3.select("#country");
let shapeInput = d3.select("#shape");
let searchBtn = d3.select("#search");
let resetBtn = d3.select("#reset");

// Add event listener to the searchButton and resetButton; call functions when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);
resetBtn.addEventListener("click", handleResetButtonClick);

// Set filteredData to dataSet
let ufoData = data;

// renderTable renders the filtered data to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (let i = 0; i < ufoData.length; i++) {

    // Get the current sighting object and its fields
    let sighting = ufoData[i];
    let fields = Object.keys(sighting);

    // Create a new row in the tbody, set the index to be i + startingIndex
    let row = tbody.insertRow(i);
    for (let j = 0; j < fields.length; j++) {

      // For every field in the sighting object, create a new cell and set its inner text to be the current value at the current sighting's field
      let field = fields[j];
      let cell = row.insertCell(j);
      cell.innerText = sighting[field];
    }
  }
}

 //  Search items with formatted user's search terms 
function handleSearchButtonClick() {
  let searchDate = $dateInput.value.trim();
  if (searchDate != "") {
    filteredData = dataSet.filter(function (sighting) {
      let sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  };
  let searchCity = $cityInput.value.trim().toLowerCase();
  if (searchCity != "") {
    filteredData = filteredData.filter(function (sighting) {
      let sightingCity = sighting.city;
      return sightingCity === filterCity;
    });
  };
  let searchState = $stateInput.value.trim().toLowerCase();
  if (searchState != "") {
    filteredData = filteredData.filter(function (sighting) {
      let sightingState = sighting.state;
      return sightingState === filterState;
    });
  };
  let searchCountry = $countryInput.value.trim().toLowerCase();
  if (searchCountry != "") {
    filteredData = filteredData.filter(function (sighting) {
      let sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  };
  let searchShape = $shapeInput.value.trim().toLowerCase();
  if (searchShape != "") {
    filteredData = filteredData.filter(function (sighting) {
      let sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();
};

// Reset the data and search form after a search
function handleResetButtonClick() {
  filteredData = data;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
}

// Render the table for the first time on page load
renderTable();