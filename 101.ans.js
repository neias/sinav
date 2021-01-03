// Çözüm

function ucunuTopla(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

ucunuTopla(10)(20)(30);
