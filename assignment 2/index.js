function loadData() {
    var tablehead = document.getElementById('itshead');
    var tr1 = document.createElement("tr");
    tr1.innerHTML = `<th scope=col>#</th>` +
        '<th scope=col>First Name</th>' +
        '<th scope=col>Middle Name</th>' +
        '<th scope=col>Last Name</th>' +
        '<th scope=col>Email</th>' +
        '<th scope=col>Phone Number</th>' +
        '<th scope=col>Role</th>' +
        '<th scope=col>Address</th>' +
        '<th scope=col>Actions</th>';
    tablehead.append(tr1);

    fetch("data.json").then(response => response.json())
        .then(data => {
            var table = document.getElementById('data');
            data.forEach(function (x, index) {
                var tr = document.createElement('tr');
                tr.innerHTML = `<td><input id=id type=text value=${x.id} readOnly></td>` +
                    `<td><input id=firstname type=text value=${x.firstname} readOnly></td>` +
                    `<td><input id=middlename type=text value=${x.middlename} readOnly></td>` +
                    `<td><input id=lastname type=text value=${x.lastname} readOnly></td>` +
                    `<td><input id=email type=text value=${x.email} readOnly></td>` +
                    `<td><input id=phone type=text value=${x.phone} readOnly></td>` +
                    `<td><input id=role type=text value=${x.role} readOnly></td>` +
                    `<td><input id=address type=text value=${x.address} readOnly></td>` +
                    '<td><input id=edit type=button value=Edit onclick=addColumn(this)></td>' +
                    '<td><input type=button value=Delete onclick=deleteRow(this)></td>';
                table.appendChild(tr);
            });
        })
}

document.getElementById("b1").addEventListener("click", change);
function change() {

    let currentvalue = document.getElementById("b1").textContent;

    let str = "Load Data";


    if (str != currentvalue) {

        document.getElementById("b1").textContent = "Load Data";
    }
    else {
        document.getElementById("b1").textContent = "Refresh Data";
    }
}
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;

    row.parentNode.removeChild(row);
}
let originalInfo=[];
function addColumn(btn) {

    var row = btn.parentNode.parentNode;
    let rIndex = row.rowIndex;
    let originalID = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[0].value;
    
    let originalFirstName = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[1].value;
    let originalMiddleName = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[2].value;
    let originalLastName = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[3].value;
    let originalEmail = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[4].value;
    let originalPhone = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[5].value;
    let originalRole = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[6].value;
    let originalAddress = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[7].value;
    originalInfo.push(originalID,originalFirstName,originalMiddleName,originalLastName,originalEmail,originalPhone,originalRole,originalAddress);
    let r = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input").length;
    let r2 = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input");
    let newlength = r - 4;
    for (let i = 0; i < newlength; i++) {
        
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly = !(document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly);
    }
    let r1 = row.parentNode;

    console.log('here');


    $('#data').each(function () {

        $(`tr:eq(${rIndex})`).append('<td><input id=save type=button value=Save onclick=saveData(this)></td>' +
            '<td><input type=button value=Cancel onclick=cancelData(this)></td>');

    });





}

let newInfo=[];
function saveData(btn) {
    var row = btn.parentNode.parentNode;
    let rIndex = row.rowIndex;
    let newID = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[0].value;
    
    let newFirstName = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[1].value;
    let newMiddleName = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[2].value;
    let newLastName = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[3].value;
    let newEmail = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[4].value;
    let newPhone = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[5].value;
    let newRole = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[6].value;
    let newAddress = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[7].value;
    newInfo.push(newID,newFirstName,newMiddleName,newLastName,newEmail,newPhone,newRole,newAddress);
    let r = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input").length;
    let r2 = document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input");
    let newlength = r - 4;
    for (let i = 0; i < newlength; i++) {
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].value = newInfo[i];
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly = !(document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly);
        
    }
    console.log(r);


}
function cancelData(btn){
    var row = btn.parentNode.parentNode;
    let rIndex = row.rowIndex;
    for(let i=0; i<8; i++){
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].value=originalInfo[i];
    }
}
// $(document).ready((function(){
//     console.log('here1');
//     $("#edit").click(function(){
//         console.log('here');
//         $('#data tr').each(function(){
//             $(this).append(`<td></td>`);
//          });
//     });
// }));