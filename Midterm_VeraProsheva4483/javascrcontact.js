function check() {
var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}

document.addEventListener('blur', function (event) {

    if (!event.target.form.classList.contains('validate')) return;
    var error = event.target.validity;
    console.log(error);

}, true);
}

let contactObj = {
    surname,
    name,
    student,
    email,
    note,
  };

localStorage.setItem("contact", JSON.stringify(contactObj));
 

 


