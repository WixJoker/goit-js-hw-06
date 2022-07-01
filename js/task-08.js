const emailRef = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');



event.preventDefault();

alert(Not all fields are filled out!!!);

const loginData = {
    email: `${email}`,
    password: `${password}`,
}
console.log(loginData);
document.getElementById('myform').reset();