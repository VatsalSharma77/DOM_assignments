let form = document.querySelector('form');
let task = document.getElementById('task');
let priority = document.getElementById('priority');
let tbody = document.querySelector('tbody');
let Data = [];

form.addEventListener('submit',function(ele)
{
    ele.preventDefault();
    let obj = {};
    obj.input1 = task.value;
    obj.input2 = priority.value;
    Data.push(obj);
    tbody.innerHTML = null;

    Data.map(function(e)
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.innerText = e.input1;
        td2.innerText = e.input2;
        row.append(td1,td2);
        tbody.append(row);

    })
})