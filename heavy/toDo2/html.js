//add row dynamically
document.getElementById("addRow").addEventListener("click", function () {

    const username = document.getElementById("username");
    const address = document.getElementById("address");
    const age = document.getElementById("age");


    var tr = userTable.insertRow(-1);


    var tableDataArray = new Array();
    tableDataArray = [username.value, address.value, age.value];

    for (var i = 0; i < tableDataArray.length; i++) {

        var td = tr.insertCell(-1);
        td.innerHTML = tableDataArray[i];
    }

    var td = tr.insertCell(-1);

    // add a button
    var button = document.createElement('button');

    // set button attributes.
    button.setAttribute('type', 'button');
    button.innerHTML = 'Remove';

    // set onclick event.
    button.setAttribute('onclick', 'remRow(this)');

    td.appendChild(button);




    username.value = "";
    address.value = "";
    age.value = "";

});