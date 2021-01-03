/*
Soru linki https://jsbin.com/qucuben/edit?js

 Kapsam ve "self"
 Aşağıdaki fonksiyon çağırıldığında sırasıyla çıktıları yazınız. 
 
*/

var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("this.color: " + this.color);
        console.log("self.color: " + self.color);
        (function() {
            console.log("this.color: " + this.color);
            console.log("self.color: " + self.color);
        })();
    }
};
 
myCar.logColor();