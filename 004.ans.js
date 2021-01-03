/*
Closure Nedir?
- Closure, üst fonksiyon kapatıldıktan sonra bile üst kapsama erişimi olan bir işlevdir.‎
- Bir fonksiyonun dahil oldugu ust fonksiyonun hafiza alanina erisebildigi ortama denilir.

Bir closure 3 ayrı scope'deki değişkenlere erişime sahiptir: 
1. Kendi scope'undaki değişkenlere
2. Dış fonksiyon scope'undaki değişkenlere
3. Genel scope'deki değişkenlere

Closure ayrıca şunlara erişebilir: 
1. Kendi parametrelerine
2. Dış fonksiyon parametrelerine

*/


const globalVariable = 'global var';
 
function outterFunc(param1) {
  const variable1 = 'var one';
  
  function innerFunc(param2) {
    const variable2 = 'var two';
    
    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }
  
  innerFunc('param one');
}
 
outterFunc('param two');