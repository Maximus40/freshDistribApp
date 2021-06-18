
function checkLogin() {
    var login = document.getElementById('login').value;
    var pwd = document.getElementById('password').value;
    url = 'http://51.178.41.189:8011/api/login/'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        login: login,
        password: pwd
    }));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            response = JSON.parse(xhr.response);
            code = response.code
            if (code == 200) {
                window.location.href = '../worker/worker.html';
            }
        }
    }
}