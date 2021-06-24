var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var userData = [];
var Role;
(function (Role) {
    Role[Role["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUBSCRIBER"] = 2] = "SUBSCRIBER";
})(Role || (Role = {}));
function FormatDate() {
    return function (target, name, descriptor) {
        var dateTime = document.getElementById("dateTime");
        dateTime.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
var Crud = /** @class */ (function () {
    function Crud() {
        this.items = [];
    }
    Crud.prototype.create = function (e) {
        this.items.push(e);
    };
    Crud.prototype.update = function (i, e) {
        this.items[i] = e;
        showTable("middle");
    };
    Crud.prototype["delete"] = function (i) {
        this.items.splice(i, 1);
        console.log(this.items);
        showTable("middle");
    };
    __decorate([
        FormatDate()
    ], Crud.prototype, "create");
    return Crud;
}());
function loadData() {
    return __awaiter(this, void 0, void 0, function () {
        var data, finalData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("data.json")];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    finalData = _a.sent();
                    userData = new Crud();
                    finalData.forEach(function (e) {
                        console.log(typeof e);
                        e.role = Role[Number(e.role)];
                        userData.create(e);
                    });
                    showTable("start");
                    return [2 /*return*/];
            }
        });
    });
}
function showTable(middle) {
    if (middle != "middle") {
        var tablehead = document.getElementById("itshead");
        var tr1 = document.createElement("tr");
        tr1.innerHTML =
            "<th scope=col>#</th>" +
                "<th scope=col>First Name</th>" +
                "<th scope=col>Middle Name</th>" +
                "<th scope=col>Last Name</th>" +
                "<th scope=col>Email</th>" +
                "<th scope=col>Phone Number</th>" +
                "<th scope=col>Role</th>" +
                "<th scope=col>Address</th>" +
                "<th scope=col>Actions</th>";
        tablehead.append(tr1);
    }
    var table = document.getElementById("data");
    console.log(userData.items);
    userData.items.forEach(function (x) {
        var tr = document.createElement("tr");
        tr.innerHTML =
            "<td><input id=id type=text value=" + x.id + " readOnly></td>" +
                ("<td><input id=firstname type=text value=" + x.firstname + " readOnly></td>") +
                ("<td><input id=middlename type=text value=" + x.middlename + " readOnly></td>") +
                ("<td><input id=lastname type=text value=" + x.lastname + " readOnly></td>") +
                ("<td><input id=email type=text value=" + x.email + " readOnly></td>") +
                ("<td><input id=phone type=text value=" + x.phone + " readOnly></td>") +
                ("<td><input id=role type=text value=" + x.role + " readOnly></td>") +
                ("<td><input id=address type=text value=" + x.address + " readOnly></td>") +
                "<td><input id=edit type=button value=Edit onclick=addColumn(this) !disabled></td>" +
                "<td><input type=button value=Delete onclick=deleteRow(this)></td>";
        table.appendChild(tr);
    });
    change();
}
function change() {
    var currentvalue = document.getElementById("b1").textContent;
    var str = "Load Data";
    document.getElementById("b1").textContent = "Refresh Data";
    $("#b1").attr("onclick", "refreshData()");
}
// function to delete a row in a table
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    var rIndex = row.rowIndex;
    rIndex = rIndex - 1;
    userData.items = userData.items.slice(0, rIndex).concat(userData.items.slice(rIndex + 1));
    $("itshead").empty();
    $("#data").empty();
    showTable("middle");
}
// array to store original data for further use
var originalInfo = [];
// function to add two button edit and save and to make the row concerning as editable
function addColumn(btn) {
    var row = btn.parentNode.parentNode;
    var rIndex = row.rowIndex;
    var originalID = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[0].value;
    var originalFirstName = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[1].value;
    var originalMiddleName = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[2].value;
    var originalLastName = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[3].value;
    var originalEmail = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[4].value;
    var originalPhone = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[5].value;
    var originalRole = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[6].value;
    var originalAddress = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[7].value;
    originalInfo.push(originalID, originalFirstName, originalMiddleName, originalLastName, originalEmail, originalPhone, originalRole, originalAddress);
    var r = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input").length;
    var r2 = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input");
    var newlength = r - 2;
    for (var i = 0; i < newlength; i++) {
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly = !document
            .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly;
    }
    // making edit button disabled
    var xx = rIndex + 1;
    $("#edit").prop("disabled", function (xx, v) {
        return !v;
    });
    var r1 = row.parentNode;
    $("#data").each(function () {
        $("tr:eq(" + rIndex + ")").append("<td><input id=save type=button value=Save onclick=saveData(this)></td>" +
            "<td><input type=button value=Cancel onclick=cancelData(this)></td>");
    });
}
// array to store new information
var newInfo = [];
// function to save the new data entered by user
function saveData(btn) {
    var row = btn.parentNode.parentNode;
    var rIndex = row.rowIndex;
    var newID = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[0].value;
    var newFirstName = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[1].value;
    var newMiddleName = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[2].value;
    var newLastName = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[3].value;
    var newEmail = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[4].value;
    var newPhone = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[5].value;
    var newRole = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[6].value;
    var newAddress = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[7].value;
    newInfo.push(newID, newFirstName, newMiddleName, newLastName, newEmail, newPhone, newRole, newAddress);
    userData.items[rIndex - 1].id = Number(newID);
    userData.items[rIndex - 1].firstname = newFirstName;
    userData.items[rIndex - 1].middlename = newMiddleName;
    userData.items[rIndex - 1].lastname = newLastName;
    userData.items[rIndex - 1].address = newAddress;
    userData.items[rIndex - 1].email = newEmail;
    userData.items[rIndex - 1].phone = newPhone;
    userData.items[rIndex - 1].role = newRole;
    originalInfo = newInfo;
    var r = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input").length;
    var r2 = document
        .getElementsByTagName("tr")[rIndex].getElementsByTagName("input");
    var newlength = r - 4;
    for (var i = 0; i < newlength; i++) {
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].value = newInfo[i];
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly = !document
            .getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].readOnly;
    }
    var xx = rIndex + 1;
    // changing back the edit button to enable
    $("#edit").prop("disabled", function (xx, v) {
        return !v;
    });
    $("itshead").empty();
    $("#data").empty();
    showTable("middle");
}
// function to perform function of cancel button to revert back the changes
function cancelData(btn) {
    var row = btn.parentNode.parentNode;
    var rIndex = row.rowIndex;
    for (var i = 0; i < 8; i++) {
        document.getElementsByTagName("tr")[rIndex].getElementsByTagName("input")[i].value = originalInfo[i];
    }
}
// function to refresh the table data
if (document.getElementById("b1").textContent == "Refresh Data") {
    document.getElementById("b1").addEventListener("click", refreshData);
}
function refreshData() {
    $("#data").empty();
    showTable("middle");
}
