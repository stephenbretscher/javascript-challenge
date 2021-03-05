// from data.js
var tableData = data;

//selects table's body
var tbody = d3.select("tbody");

//population of initial table when webpage is opened

function populate() {
    //Arrow function populates each column of table using data.js
    tableData.map(data => {
        // append new row to table 
        var new_row = tbody.append("tr");
        
        // populate cells in new row: datetime, city, state, country, shape, duration, and comment
        new_row.append('td').text(data.datetime);
        new_row.append('td').text(data.city);
        new_row.append('td').text(data.state);
        new_row.append('td').text(data.country);
        new_row.append('td').text(data.shape);
        new_row.append('td').text(data.durationMinutes);
        new_row.append('td').text(data.comments);
    })
};

populate();

//Populate based on date/time input

//event listener for filter button click 
var filterButton = d3.select('#filter-btn');
filterButton.on('click', function() {

    //Select and filter by user's date input
    var dateInput = d3.select("#datetime").property("value");
    var filtered = tableData.filter(data => data.datetime == dateInput);
    //first set original table equal to nothing, clearing space for new table
    tbody.html("");
    //----------------------------------------------------------
    // Write new table with forEach loop
    filtered.forEach(i => {
        // append new row to table
        var new_row = tbody.append("tr");

        // populate cells in new row: datetime, city, state, country, shape, duration, and comment
        new_row.append("td").text(i.datetime);
        new_row.append("td").text(i.city);
        new_row.append("td").text(i.state);
        new_row.append("td").text(i.country);
        new_row.append("td").text(i.shape);
        new_row.append("td").text(i.durationMinutes);
        new_row.append("td").text(i.comments);
    });
    //----------------------------------------------------------
});







