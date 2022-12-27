var customers = []
var modal = document.getElementById("myModal").value;

$(document).ready(function () {
    console.log("ready!");
    $.ajax({
        url: "Quiz1user.json"
    }).done(function (data) {
        console.log("DONE", data)
        for (let d in data) {
            customers.push(data[d])
            let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
         
            </tr>`
            $("#databody tr:last").after(dataStr)
        }

        console.log(customers)
    });
});

function openModal(){
    $('#myModal').modal('show')
    
}

function closeModal(){
    $('#myModal').modal('hide')
    
}

function addToCustomer(){
    let customerObj = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    $('#databody').html("")
    customers.push(customerObj)
    loadData()
    
    

    
}

function deleteCustomers(index){
    console.log("DELETE",index)
    delete customers[index]
    $('#databody').html("")
    loadData()
}

function loadData(){
    let allRows = ""
    let datatable = document.getElementById("data-table")
    for (let p in customers){
        let cellName = `<td><img class='icon' src='icon-delete.png' style='width: 20px' onclick='deleteCustomers("${p}")'> ` + customers[p].name + "</td>"
        let cellEmail = '<td class="text-right">' + customers[p].email + "</td>"
        let cellNumber = '<td class="text-right">' + customers[p].phone + "</td>"
        let row = `<tr>${cellName}${cellEmail}${cellNumber}</tr>`
        allRows += row
    }
    $('#databody').html(allRows)
    datatable.append(customers[p])
    
}