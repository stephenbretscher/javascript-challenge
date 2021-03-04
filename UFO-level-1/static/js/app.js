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
        
        // populate cells in new row: datetime, city, state, country, shape, and comment
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

//event listener for button click 
var filterButton = d3.select('#filter-btn');
filterButton.on('click', function() {
    


});







