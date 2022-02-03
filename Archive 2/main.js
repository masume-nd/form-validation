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
    const contact1 = new Contact(fName.value,lName.value,email.value,phone.value,nationality.value,displayRadioValue(),Date.now())
    AllContact.add(contact1);
    
}

function displayRadioValue() {
    for(i = 0; i < gender.length; i++) {
    if(gender[i].checked)
       return gender[i].value;
    }
}

// function Remove(e) {
//     if(e.target.classList.contains('delete')){
//         e.target.parentNode.parentNode.remove();
//     }
//     document.querySelectorAll("tr").forEach((tr,index)=>{
//      if(tr.querySelector("th").parentElement.parentElement.id == 'tableBody'){
//         tr.querySelector("th").innerHTML = index;
//         count = index;
//        }
//     })
// }

function validate(input , type) {
    // !input.value ? "first name is empty" : true;    
    if(!input.value){
        throw `${input.value}isn't valid!`
    }
    // switch (type){
    //     case("fName"):
    //     if(input.value.length > 20){
    //         throw 'first name most be less than 20 character'
    //     }
    //     case('phone'):
    //     if (!input.value.match(/\d/g).length === 11){
    //         throw 'invalid phone number'
    //     }
    // }
    return true
}

function Catch(element, error) {
    element.classList.add("is-invalid")
    const textErr = document.createElement("div");
    textErr.classList.add("invalid-feedback");
    textErr.innerText = error
    element.parentElement.append(textErr);
}

class Contact{
    constructor(fName,lName,email,phone,nationality,gender,id){
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.nationality = nationality;
        this.gender = gender;
        this.id = id;
    }
 
    static validate(){

    }
}


class ContactList{
    constructor(){
        this.allContacts = []
    }
    add(obj){
        this.allContacts.push(obj);
        this.render()
    }
    delete(id){
        console.log(this.allContacts);
       this.allContacts = this.allContacts.filter(el=>
            (el.id != id)
        )
        console.log(this.allContacts);
        this.render()
    }
    refresh(){
        this.allContacts = []
    }
    render(){
        this.allContacts.forEach((item , index)=>{
            
            let TR = document.createElement("tr");
            TR.innerHTML = `
                            <th class="counter" id="${item.id}" scope="row">${++count}</th>
                            <td>${item.fName+" "+item.lName}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>${displayRadioValue()}</td>
                            <td>${item.nationality}</td>
                            <td><button onclick="removee(${item.id})" class="delete bg-danger border-none">Delet</button></td>
                        `  
                    tBody.appendChild(TR);
        })
    }
}
function removee(id){
    AllContact.delete(id)
}

const AllContact = new ContactList();











 // document.querySelectorAll('.invalid-feedback').forEach((e)=>{
    //     e.remove();
    // })
    // document.querySelectorAll('.is-invalid').forEach((e)=>{
    //     e.classList.remove('is-invalid');
    // })
    // try{
    //     validate(fName ,'fName');
    // } catch(error){
    //     Catch(fName ,error)
    // }

    // try{
    //     validate(lName,'lName')
    // } catch(error){
    //     Catch(lName ,error)
    // }

    // try{
    //    validate(phone, 'phone')
    // } catch(error){
    //     Catch(phone ,error)
    // }

 // if(fName.value && lName.value) {
    //     let TR = document.createElement("tr");
    //     TR.innerHTML = `
    //             <th class="counter" scope="row">${++count}</th>
    //             <td>${fName.value+" "+lName.value}</td>
    //             <td>${email.value}</td>
    //             <td>${phone.value}</td>
    //             <td>${displayRadioValue()}</td>
    //             <td>${nationality.value}</td>
    //             <td><button class="delete bg-danger border-none">Delet</button></td>
    //         `  
    //         tBody.appendChild(TR);
    //         TR.addEventListener('click' ,Remove)
    //     }    


// (function () {
//     var form = document.querySelector('.needs-validation')
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         form.classList.add('was-validated');
//         if(!form.checkValidity()) {
//             event.stopPropagation();
//         }else{
//             addRow()
//         }
//     }, false)

// })()
 
// function addRow() {
//     let TR = document.createElement("tr");
//     TR.innerHTML = `
//             <th class="counter" scope="row">${++count}</th>
//             <td>${fName.value+" "+lName.value}</td>
//             <td>${email.value}</td>
//             <td>${phone.value}</td>
//             <td>${displayRadioValue()}</td>
//             <td>${nationality.value}</td>
//             <td><button class="delete bg-danger border-none">Delet</button></td>
//         `  
//         tBody.appendChild(TR);
//         TR.addEventListener('click' ,Remove)
//     } 
// }
    