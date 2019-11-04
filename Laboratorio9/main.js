var rows = [];
var counterId = 0;

function AddRow(carnet,schedule,late,tBody){
    var newRow = document.createElement("tr");
    var date = new Date();

    rows.push({
        id: counterId,
        carnet: carnet,
        schedule: schedule,
        late: late
    }
    );
    newRow.innerHTML = `<td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`
    
    var cellContainer = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerText = "Eliminar";
    deleteButton.value = counterId;

    deleteButton.addEventListener("click",event=>{
    var carnetRegex = new RegExp('[0-9]{8}');
    var idElement = event.srcElement.value;
    var campo = document.getElementById(idElement);
    var carnet = 0;
    rows.forEach((item,index)=>{
        if(item.id == idElement)
        {
            carnet = item.carnet;
            console.log(carnet);
        }
    })
    
    if(carnetRegex.test(campo.value) && campo.value == carnet )
    {
        var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;
        tBody.removeChild(trToDelete);
        rows.forEach((item,index)=>{
        if(item.id == idElement)
        {
            rows.splice(index,1);
        }
        });
    }
    else{
        alert("Datos incorrectos");
    }
   
    });
    var Cconfirm = document.createElement("td");
    var ConfirmLabel = document.createElement("input")
    ConfirmLabel.classList.add("form-control")
    ConfirmLabel.id = counterId;
    ConfirmLabel.maxLength = "8";
    cellContainer.appendChild(deleteButton);
    newRow.appendChild(cellContainer);
    Cconfirm.appendChild(ConfirmLabel);
    newRow.appendChild(Cconfirm);
    tBody.appendChild(newRow);
    counterId++;
}

var parseLateSwitch = (value)=>{
    if(value){
        return "Tarde";
    }
    return "A tiempo";
    }

window.onload = function()
{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");
   
    var carnetRegex = new RegExp('[0-9]{8}');

    carnet_field.addEventListener("keyup",(event)=>
    {
      var carnet = carnet_field.value;
      if(carnetRegex.test(carnet))
      {
         
          submit_btn.disabled = false;
      }else{
        submit_btn.disabled = true;
      }
    });

    submit_btn.addEventListener("click",function(){
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        AddRow(carnet,schedule,late,tBody);    
    });
}
