const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("Email");
const phone = document.getElementById("tell");
const nationality = document.getElementById("nationality");
const btn  = document.getElementById("submitBtn");
const tBody = document.getElementById("tableBody");
const gender = document.querySelectorAll('input[name=gender]');
const fName_error_div = document.querySelector("#firstName-error");
const lName_error_div = document.querySelector("#lastName-error");

let count = 0;
btn.addEventListener('click' , submit);


function submit(e) {
    e.preventDefault();
    const contact1 = new Contact(fName.value,lName.value,email.value,phone.value,nationality.value,displayRadioValue(),Date.now())
    contact1.firstNameValidate()
    contact1.lastNameValidate()
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

// function validate(input , type) {
//     // !input.value ? "first name is empty" : true;    
//     if(!input.value){
//         throw `${input.value}isn't valid!`
//     }
//     switch (type){
//         case("fName"):
//         if(input.value.length > 20){
//             throw 'first name most be less than 20 character'
//         }
//         case('phone'):
//         if (!input.value.match(/\d/g).length === 11){
//             throw 'invalid phone number'
//         }
//     }
//     return true
// }

function catchError(element, error) {
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
    
    firstNameValidate(){
        if(this.fName.length > 20){
            if(fName_error_div.dis)
            fName_error_div
        }
    }
    lastNameValidate(){
        if(this.lName.length > 20 ){
            catchError(lName,"last name must be less than 20 character")
        }
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
        this.allContacts = this.allContacts.filter(el=>{
            if(el.id != id){
                return true
            }
    })
        this.render()
    }
    refresh(){
        this.allContacts = []
    }
    render(){
        tBody.innerHTML = ""
        console.log(this.allContacts);
        this.allContacts.forEach((item, index)=>{  
            let TR = document.createElement("tr");
            TR.id = item.id;
            TR.innerHTML = `
                            <th class="counter"  scope="row">${index+1}</th>
                            <td>${item.fName+" "+item.lName}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>${displayRadioValue()}</td>
                            <td>${item.nationality}</td>
                            <td><button class="delete bg-danger border-none">Delet</button></td>
                        `  
                    tBody.appendChild(TR);
                    
        })
    }
}
document.addEventListener('click' , event =>{
    if(event.target.classList.contains('delete')){
        let myId =  event.target.parentNode.parentNode.id;
        AllContact.delete(myId);
    }
    
})

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
    