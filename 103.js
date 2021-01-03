
/*
Soru linki https://jsbin.com/xitebil/edit?js,output


Buton 4 e tıkladığınızda çıkan mesaj nedir ? 
*/

function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Buton ' + i;
        button.onclick = function () {
            alert('Bu ' + i + '. butondur');
        }
        body.appendChild(button);
    }
}

createButtons();