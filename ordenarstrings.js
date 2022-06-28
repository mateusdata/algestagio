
//codico completo abaixo
let string = "Cats And*Dogs-are Awesome";

function comelCase(str) {
    let word = "";

    let removeSpaces = str;
    let checkLowercase = str.toLowerCase();

    if (checkLowercase === removeSpaces) {
        removeSpaces = str.replace(/[^\w]/g, "");
        let joinStrinLowercase = removeSpaces.replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        })

        word = joinStrinLowercase.toUpperCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toLowerCase();
        })
    }
    else {
        removeSpaces = str.replace(/[^\w]/g, " ");
        word = removeSpaces.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        })
       
    }

    let joinString = word.replace(/[^\w]/g, "");
    
    if(joinString[0]!==joinString[0].toLowerCase()){
        let changeFirstString = joinString.replace(/(?:^|\s)\S/, joinString[0].toLowerCase());
        str = changeFirstString;
        return str;
    }
    else{
        str = joinString;
        return str;
    }
    
  
}
console.log(comelCase(string));

//versão inicial
/*let string = "cats AND*Dogs-are Awesome";

function comelCase(str) {
    let word = "";

    let removeSpaces = str;
    let checkLowercase = str.toLowerCase();

    if (checkLowercase === removeSpaces) {
        removeSpaces = str.replace(/[^\w]/g, "");
        let joinStrinLowercase = removeSpaces.replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        })

        word = joinStrinLowercase.toUpperCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toLowerCase();
        })
    }
    else {
        removeSpaces = str.replace(/[^\w]/g, " ");
        word = removeSpaces.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        })

    }
    let joinString = word.replace(/[^\w]/g, "");
    str = joinString;
    return str;
}
console.log(comelCase(string));
*/
