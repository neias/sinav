// Çözüm 1:

function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        (function (num) {
            button.onclick = function () {
                alert('Bu ' + num + '. butondur');
            }
        })(i);
        body.appendChild(button);
    }
}

createButtons();



// Çözüm 2:

function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        addClickFunctionality(button, i);
        body.appendChild(button);
    }
}

function addClickFunctionality(button, num) {
    button.onclick = function () {
        alert('Bu ' + num + '. butondur');
    }
}

createButtons();




// Çözüm 3:

function createButtons() {
    for (let i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function () {
            alert('Bu ' + i + '. butondur');
        }
        body.appendChild(button);
    }
}

createButtons();