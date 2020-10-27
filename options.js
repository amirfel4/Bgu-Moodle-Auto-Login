let loginButton = document.getElementById('loginBtn');
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');


loginButton.addEventListener('click', function() {
  chrome.storage.sync.set({username: usernameInput.value, password: passwordInput.value}, function() {
    console.log('username is ' + usernameInput.value);
    console.log('password saved for ' + usernameInput.value);
  });

  window.alert("Saved! you can now go to any moodle page without login");
});