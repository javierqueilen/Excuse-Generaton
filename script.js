function generateExcuse(){

    let who = ['The dog','My granma','His turtle','My bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let whoIndx = Math.floor(Math.random() * who.length);
    let whatIndx = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndx] + " " + what[whatIndx] + " " + when[whenIndex];
    };

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
      document.querySelector("#the-excuse").innerHTML = generateExcuse();
    })
    console.log(generateExcuse());
};



   