// fill in javascript code here
let form = document.querySelector('form');
let Name = document.getElementById('name');
let ID = document.getElementById('docID');
let specialization = document.getElementById('dept');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let mobile = document.getElementById('mbl');
let tbody = document.querySelector('tbody');
let Data = [];


form.addEventListener('submit',function(e)
{
    e.preventDefault();
    let obj = {};
    obj.input1 = Name.value;
    obj.input2 = ID.value;
    obj.input3 = specialization.value;
    obj.input4 = exp.value;
    obj.input5 = email.value;
    obj.input6 = mobile.value;
    Data.push(obj);
    tbody.innerHTML = null;

    Data.map(function(ele)
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        row.append(td1,td2,td3,td4,td5,td6);
        tbody.append(row);
        
    })

})
