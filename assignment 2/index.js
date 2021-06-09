function loadData() {
    fetch("data.json").then(response => response.json())
        .then(data => {
            var table = document.getElementById('data');
            data.forEach(function (x, index) {
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + x.id + '</td>' +
                    '<td>' + x.firstname + '</td>' +
                    '<td>' + x.middlename + '</td>' +
                    '<td>' + x.lastname + '</td>' +
                    '<td>' + x.email + '</td>' +
                    '<td>' + x.phone + '</td>' +
                    '<td>' + x.role + '</td>' +
                    '<td>' + x.address + '</td>' +
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
function addColumn(btn) {
    var row = btn.parentNode.parentNode;
    let rIndex = row.rowIndex;
    let r1 = row.parentNode;
    console.log('here');


    $('#data').each(function () {

        $(`tr:eq(${rIndex})`).append('<td><input id=save type=button value=Save></td>' +
            '<td><input type=button value=Cancel></td>');

    });





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