console.log('This function work when the net is connected!!')

function addData() {
  var faculty = document.getElementById('faculty').value;
  var semester = document.getElementById('semester').value
  var subject = document.getElementById('subject').value
  var time = document.getElementById('time').value;
  var teacher = document.getElementById('teacher').value;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));

  td1.innerHTML = faculty;
  td2.innerHTML = semester;
  td3.innerHTML = subject;
  td4.innerHTML = time;
  td5.innerHTML = teacher;

  td6.innerHTML = '<input type"button" name="del" value="Delete" onclick="delData(this);" class="btn btn-danger">';
  td7.innerHTML = '<input type"button" name="up" value="Update" onclick="upData(this);" class="btn btn-primary">';

  document.getElementById('displayTable').appendChild(tr);
}

function upData(data) {
  var faculty = document.getElementById('faculty').value;
  var semester = document.getElementById('semester').value
  var subject = document.getElementById('subject').value
  var time = document.getElementById('time').value;
  var teacher = document.getElementById('teacher').value;
  var update = data.parentNode.parentNode;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));

  td1.innerHTML = `<select name="faculty" id="faculty1">
          <option name="faculty" value="BCA">BCA</option>
          <option name="faculty" value="BBM">BBM</option></select
        >  `;
  td2.innerHTML = `<select name="semester" id="semester1">
          <option value="1st semester">1st Semester</option>
          <option value="2nd semester">2nd Semester</option>
          <option value="3rd semester">3rd Semester</option>
          <option value="4th semester">4th Semester</option></select
        >`;
  td3.innerHTML = `<select name="subject" id="subject1">
    <option value="English">English</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Java">Java</option>
    <option value="Python">Python</option></select
  >`;
  td4.innerHTML = `<input
          type="time"
          name="time"
          id="time1"
          class="time"
          placeholder="Select time"
        />`;
  td5.innerHTML = `<input
          type="text"
          name="teacher"
          id="teacher1"
          placeholder="Teacher Name"
        />`;

  td6.innerHTML = '<input type="button" name="del" value="Delete" onclick="delData(this);" class="btn btn-danger">';
  td7.innerHTML = '<input type="button" name="up" value="Update" onclick="addUpData(this);" class="btn btn-primary">';

  document.getElementById('displayTable').replaceChild(tr, update)
}

function addUpData(data) {
  var faculty = document.getElementById('faculty1').value;
  var semester = document.getElementById('semester1').value
  var subject = document.getElementById('subject1').value
  var time = document.getElementById('time1').value;
  var teacher = document.getElementById('teacher1').value;
  var update = data.parentNode.parentNode;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));

  td1.innerHTML = faculty;
  td2.innerHTML = semester;
  td3.innerHTML = subject;
  td4.innerHTML = time;
  td5.innerHTML = teacher;

  td6.innerHTML = '<input type"button" name="del" value="Delete" onclick="addDelData(this);" class="btn btn-danger">';
  td7.innerHTML = '<input type"button" name="up" value="Update" onclick="upData(this);" class="btn btn-primary">';

  document.getElementById('displayTable').replaceChild(tr, update)
}

function delData(Data) {
  var data = Data.parentNode.parentNode;
  data.parentNode.removeChild(data)
}

// searchText = document.getElementById('searchText');
// searchText.addEventListener('input', function () {

//   let searchValue = searchText.value.toLowerCase();
//   console.log('inpute value is'.searchValue);
//   // let teacherName = document.getElementById('teacher1');
//   // if (teacherName.include(searchValue)) {
//   //   element.style.display = 'block';
//   // } else {
//   //   element.style.display = 'none'
//   // }

// })


// JavaScript code for search Engine
function search_animal() {
  let input = document.getElementById('searchText').value.toLowerCase();

  let myTable = document.getElementById('displayTable');

  let tr = myTable.getElementsByTagName('tr')
}