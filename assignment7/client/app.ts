declare module "jquery" {
  export = $;
}

let userData: any = [];

enum Role {
  SUPER_ADMIN = 0,
  ADMIN = 1,
  SUBSCRIBER = 2,
}

interface User {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
  address: string;
}
function FormatDate() {
  return function (
    target: any,
    name: string,
    descriptor?: PropertyDescriptor
  ): any {
    const dateTime = document.getElementById("dateTime") as HTMLInputElement;
    dateTime.innerHTML = new Date().toLocaleString();
    setInterval(function () {
      dateTime.innerHTML = new Date().toLocaleString();
    }, 1000);
  };
}
class Crud<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }
  @FormatDate()
  create(e: T): void {
    this.items.push(e);
  }

  update(i: number, e: T) {
    this.items[i] = e;
    showTable("middle");
  }
  delete(i: number): void {
    this.items.splice(i, 1);
    console.log(this.items);
    showTable("middle");
  }
}
async function loadData() {
  // loading data from json file

  const data = await fetch("data.json");
  const finalData: Array<User> = await data.json();
  userData = new Crud<User>();
  finalData.forEach(function (e) {
    console.log(typeof e);
    e.role = Role[Number(e.role)];
    userData.create(e);
  });

  showTable("start");
}

function showTable(middle: string) {
  if (middle != "middle") {
    var tablehead = document.getElementById("itshead")!;
    var tr1 = document.createElement("tr");
    tr1.innerHTML =
      `<th scope=col>#</th>` +
      "<th scope=col>First Name</th>" +
      "<th scope=col>Middle Name</th>" +
      "<th scope=col>Last Name</th>" +
      "<th scope=col>Email</th>" +
      "<th scope=col>Phone Number</th>" +
      "<th scope=col>Role</th>" +
      "<th scope=col>Address</th>" +
      "<th scope=col>Actions</th>";
    (tablehead as any).append(tr1);
  }

  var table = document.getElementById("data")!;
  console.log(userData.items);

  userData.items.forEach(function (x: any) {
    var tr = document.createElement("tr");
    tr.innerHTML =
      `<td><input id=id type=text value=${x.id} readOnly></td>` +
      `<td><input id=firstname type=text value=${x.firstname} readOnly></td>` +
      `<td><input id=middlename type=text value=${x.middlename} readOnly></td>` +
      `<td><input id=lastname type=text value=${x.lastname} readOnly></td>` +
      `<td><input id=email type=text value=${x.email} readOnly></td>` +
      `<td><input id=phone type=text value=${x.phone} readOnly></td>` +
      `<td><input id=role type=text value=${x.role} readOnly></td>` +
      `<td><input id=address type=text value=${x.address} readOnly></td>` +
      "<td><input id=edit type=button value=Edit onclick=addColumn(this) !disabled></td>" +
      "<td><input type=button value=Delete onclick=deleteRow(this)></td>";
    table.appendChild(tr);
  });

  change();
}

function change() {
  let currentvalue = document.getElementById("b1")!.textContent;

  let str = "Load Data";

  document.getElementById("b1")!.textContent = "Refresh Data";
  $("#b1").attr("onclick", "refreshData()");
}

// function to delete a row in a table
function deleteRow(btn: any) {
  var row = btn.parentNode.parentNode;
  let rIndex = row.rowIndex;
  rIndex = rIndex - 1;

  userData.items = [
    ...userData.items.slice(0, rIndex),
    ...userData.items.slice(rIndex + 1),
  ];

  $("itshead").empty();
  $("#data").empty();
  showTable("middle");
}

// array to store original data for further use
let originalInfo: any = [];

// function to add two button edit and save and to make the row concerning as editable
function addColumn(btn: any) {
  var row = btn.parentNode.parentNode;
  let rIndex = row.rowIndex;
  let originalID = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[0].value;

  let originalFirstName = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[1].value;
  let originalMiddleName = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[2].value;
  let originalLastName = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[3].value;
  let originalEmail = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[4].value;
  let originalPhone = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[5].value;
  let originalRole = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[6].value;
  let originalAddress = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[7].value;
  originalInfo.push(
    originalID,
    originalFirstName,
    originalMiddleName,
    originalLastName,
    originalEmail,
    originalPhone,
    originalRole,
    originalAddress
  );
  let r = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input").length;
  let r2 = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input");
  let newlength = r - 2;

  for (let i = 0; i < newlength; i++) {
    document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[
      i
    ].readOnly = !document
      .getElementsByTagName("tr")
      [rIndex].getElementsByTagName("input")[i].readOnly;
  }

  // making edit button disabled
  let xx = rIndex + 1;
  $("#edit").prop("disabled", function (xx, v) {
    return !v;
  });

  let r1 = row.parentNode;

  $("#data").each(function () {
    $(`tr:eq(${rIndex})`).append(
      "<td><input id=save type=button value=Save onclick=saveData(this)></td>" +
        "<td><input type=button value=Cancel onclick=cancelData(this)></td>"
    );
  });
}

// array to store new information
let newInfo: any = [];

// function to save the new data entered by user
function saveData(btn: any) {
  var row = btn.parentNode.parentNode;

  let rIndex = row.rowIndex;

  let newID = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[0].value;

  let newFirstName = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[1].value;
  let newMiddleName = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[2].value;
  let newLastName = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[3].value;
  let newEmail = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[4].value;
  let newPhone = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[5].value;
  let newRole = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[6].value;
  let newAddress = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input")[7].value;
  newInfo.push(
    newID,
    newFirstName,
    newMiddleName,
    newLastName,
    newEmail,
    newPhone,
    newRole,
    newAddress
  );

  userData.items[rIndex - 1].id = Number(newID);
  userData.items[rIndex - 1].firstname = newFirstName;
  userData.items[rIndex - 1].middlename = newMiddleName;
  userData.items[rIndex - 1].lastname = newLastName;
  userData.items[rIndex - 1].address = newAddress;
  userData.items[rIndex - 1].email = newEmail;
  userData.items[rIndex - 1].phone = newPhone;
  userData.items[rIndex - 1].role = newRole;
  originalInfo = newInfo;

  let r = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input").length;
  let r2 = document
    .getElementsByTagName("tr")
    [rIndex].getElementsByTagName("input");
  let newlength = r - 4;
  for (let i = 0; i < newlength; i++) {
    document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[
      i
    ].value = newInfo[i];
    document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[
      i
    ].readOnly = !document
      .getElementsByTagName("tr")
      [rIndex].getElementsByTagName("input")[i].readOnly;
  }
  let xx = rIndex + 1;

  // changing back the edit button to enable
  $("#edit").prop("disabled", function (xx, v) {
    return !v;
  });
  $("itshead").empty();
  $("#data").empty();
  showTable("middle");
}

// function to perform function of cancel button to revert back the changes
function cancelData(btn: any) {
  var row = btn.parentNode.parentNode;
  let rIndex = row.rowIndex;
  for (let i = 0; i < 8; i++) {
    document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[
      i
    ].value = originalInfo[i];
  }
}

// function to refresh the table data
if (document.getElementById("b1")!.textContent == "Refresh Data") {
  document.getElementById("b1")!.addEventListener("click", refreshData);
}
function refreshData() {
  $("#data").empty();
  showTable("middle");
}
