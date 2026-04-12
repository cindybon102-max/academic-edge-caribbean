// LOGIN
document.addEventListener('DOMContentLoaded', function () {

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      login();
    });
  }

});

function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Your login logic here (e.g. API call)
  console.log('Logging in with:', email);
}
