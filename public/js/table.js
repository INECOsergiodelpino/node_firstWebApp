let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('contacto').appendChild(table);

var arr = ['telefono', 'email', 'nombre', 'apellidos'];
arr.forEach((el, index)=>{
    table.innerHTML += "<tr><td>"+ el +"</td></tr>";
  })

// // Creating and adding data to first row of the table
// let row_1 = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = "YEAR";
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = "MONTH";
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = "DAY";

// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// thead.appendChild(row_1);

// // Creating and adding data to second row of the table
// let row_2 = document.createElement('tr');
// let row_2_data_1 = document.createElement('td');
// row_2_data_1.innerHTML = "2021";
// let row_2_data_2 = document.createElement('td');
// row_2_data_2.innerHTML = "1";
// let row_2_data_3 = document.createElement('td');
// row_2_data_3.innerHTML = "31";

// row_2.appendChild(row_2_data_1);
// row_2.appendChild(row_2_data_2);
// row_2.appendChild(row_2_data_3);
// tbody.appendChild(row_2);


// // Creating and adding data to third row of the table
// let row_3 = document.createElement('tr');
// let row_3_data_1 = document.createElement('td');
// row_3_data_1.innerHTML = "2021";
// let row_3_data_2 = document.createElement('td');
// row_3_data_2.innerHTML = "2";
// let row_3_data_3 = document.createElement('td');
// row_3_data_3.innerHTML = "5";

// row_3.appendChild(row_3_data_1);
// row_3.appendChild(row_3_data_2);
// row_3.appendChild(row_3_data_3);
// tbody.appendChild(row_3);