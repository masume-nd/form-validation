const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("Email");
const phone = document.getElementById("tell");
const nationality = document.getElementById("nationality");
const btn  = document.getElementById("submitBtn");
const tBody = document.getElementById("tableBody");
const gender = document.querySelectorAll('input[name=gender]');
let count = 0;
btn.addEventListener('click' , submit);


function submit(e) {
    e.preventDefault();
    document.querySelectorAll('.invalid-feedback').forEach((e)=>{
        e.remove();
    })
    document.querySelectorAll('.is-invalid').forEach((e)=>{
        e.classList.remove('is-invalid');
    })
    try{
        validate(fName)
    } catch(error){
        Catch(fName ,error)
    }

    try{
        validate(lName)
    } catch(error){
        Catch(lName ,error)
    }

    try{
       validate(phone)
    } catch(error){
        Catch(phone ,error)
    }
    if(fName.value && lName.value) {
        let TR = document.createElement("tr");
        TR.innerHTML = `
                <th class="counter" scope="row">${++count}</th>
                <td>${fName.value+" "+lName.value}</td>
                <td>${email.value}</td>
                <td>${phone.value}</td>
                <td>${displayRadioValue()}</td>
                <td>${nationality.value}</td>
                <td><button class="delete bg-danger border-none">Delet</button></td>
            `  
            tBody.appendChild(TR);
            TR.addEventListener('click' ,Remove)
        }
    
        
}

function displayRadioValue() {
    for(i = 0; i < gender.length; i++) {
    if(gender[i].checked)
       return gender[i].value;
    }
}

function Remove(e) {
    if(e.target.classList.contains('delete')){
        e.target.parentNode.parentNode.remove();
    }

    document.querySelectorAll("tr").forEach((tr,index)=>{
     if(tr.querySelector("th").parentElement.parentElement.id == 'tableBody'){
        tr.querySelector("th").innerHTML = index;
        count = index;
       }
    })
}

function validate(input) {
    // !input.value ? "first name is empty" : true;    
    if(!input.value){
        console.log(input);
        throw `${input.value}isn't valid!`
    } 
    return true
}

function Catch(element, error) {
    console.log(element);
    element.classList.add("is-invalid")
    const textErr = document.createElement("div");
    textErr.classList.add("invalid-feedback");
    textErr.innerText = error
    element.parentElement.append(textErr);
}
