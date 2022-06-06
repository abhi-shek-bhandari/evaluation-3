// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunc);

function myfunc(){
    event.preventDefault();
    let name = document.querySelector("#name").value;

    let employeeID = document.querySelector("#employeeID").value;

    let department = document.querySelector("#department").value;

    let exp = document.querySelector("#exp").value;

    let email = document.querySelector("#email").value;

    let mobile = document.querySelector("#mbl").value;

    console.log(name,employeeID,department,exp,email,mobile)

    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = name;

    let td1 = document.createElement("td");
    td1.innerText = employeeID;

    let td2 = document.createElement("td");
    td2.innerText = department;

    let td3 = document.createElement("td");
    td3.innerText = exp;

    let td4 = document.createElement("td");
    td4.innerText = email;

    let td5 = document.createElement("td");
    td5.textContent = mobile;

    let td6 = document.createElement("td");
    let role = ""
    if(exp>=5){
        role = "Senior";
    }
    else if(exp>1 && exp<5){
        role = "Junior";
    }
    else if(exp<=1){
        role = "Fresher";
    }
    td6.innerText = role;
    
    let td7 = document.createElement("td");
    td7.textContent = "Delete";
    td7.style.backgroundColor = "red";
    td7.style.color = "white";
    td7.addEventListener("click",deleteRow);

    tr.append(td,td1,td2,td3,td4,td5,td6,td7)
    document.querySelector("tbody").append(tr)


    function deleteRow(){
        event.target.parentNode.remove();
        event.target.parentNode.innerHtml = "";
    }
}