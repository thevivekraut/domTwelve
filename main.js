const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
     const details = {
     name: name,
     email: email
  }
  
  console.log(Object.keys(details));
  const keysArr = Object.keys(details);
  
  keysArr.forEach(key => {
    console.log(details[key])
  })

  localStorage.setItem(details.email, JSON.stringify(details));
  showUserOnScreen(details);
}

function showUserOnScreen(user){
  const parentNode = document.getElementById('users');
  const childHTML = `<li> ${user.name} - ${user.email} </li>`

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
   
  a1.addEventListener("click", () => {
          console.log(details);
          document.getElementById("name").value = details.name;
          document.getElementById("email").value = details.email;
          li.remove();
        })
}
