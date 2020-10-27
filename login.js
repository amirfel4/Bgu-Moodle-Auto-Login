let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');


if(usernameInput && passwordInput) {
    chrome.storage.sync.get(['username', 'password'], function(data){
        if(!data.username || !data.password) {
            let message = "please set your username and password on the extension options page!";
            console.error(message)
            alert(message)
        }
        else {
            usernameInput.focus();
            document.execCommand('insertText', false, data.username);

            passwordInput.focus();
            document.execCommand('insertText', false, data.password);
        
            document.getElementById('loginbtn').click();
        }
    });
}
else {
    console.error("Couldn't found username and password input fields!")
}