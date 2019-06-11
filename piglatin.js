//pseudo code
//write a function that takes the user input
//test the user input for pig latin rules
//change the user input depending on which rules to obey
//return the translated output

// var userInput = document.getElementById("user-input").value
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
//
// function asVowels (str) {
//     var newArr = str.split(" ")
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if(newArr[i].charAt(0) === vowels[j]){
//                 newArr[i] = newArr[i] + "way"
//             }
//         }
//     } return newArr
// }

// function startsWithY (string) {
//     var newArr = string.split(" ")
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i].charAt(0) === "Y" || newArr[i].charAt(0) === "y") {
//             newArr[i] = newArr[i].substring(1)
//             newArr[i] = newArr[i]+"yay"
//         }
//     }
//     return newArr
// }
// console.log(asVowels("in downtown abbey eats"))
// console.log(startsWithY("Yellow yollo"));
//
// function startWithConst (string) {
//     var newArr = string.split(" ")
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (newArr[i].charAt(0) !== vowels[j]) {
//                 var x = newArr[i].slice(0,newArr.indexOf(vowels[j] )-1)
//                 var y = newArr[i].slice(newArr.indexOf(vowels[j]) -1)
//             }
//         }
//     }
//     return y + x + "ay"
// }

// function checkForQu (string) {
//     var newArr = string.split(" ")
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (newArr[i].charAt(0) !== vowels[j]) {
//                 if(newArr[i].includes("u") && newArr[i].charAt([newArr[i].indexOf('u')-1])=== "q")
//                 var x = newArr[i].slice(0,newArr[i].indexOf("u")+1)
//                 var y = newArr[i].slice(newArr[i].indexOf("u")+1)
//             }
//         }
//     }
//     return y + x + "ay"
// }

// console.log(checkForQu("squeal"));

function translator (userInput) {
    var newArr = userInput.split(" ")
    var tempArr = []
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(newArr[i].charAt(0) === vowels[j]){
                //calls vowel function
                newArr[i] = asVowels(newArr[i])
            }else if(newArr[i].charAt(0) === "Y" || newArr[i].charAt(0) === "y") {
                tempArr.push(startsWithY(newArr[i]))
                //call the y function
                // return "conditional 2"

            } else if(newArr[i].includes("u") && newArr[i].charAt([newArr[i].indexOf('u')-1])=== "q" {
                //call the squeal function
                // return "conditional 3"
                // tempArr.push(startsWithQU(newArr[i]))
            } else if (newArr[i].includes("u") && newArr[i].charAt([newArr[i].indexOf('u')-1])!== "q" && newArr[i].charAt(0) !== vowels[j]){

                    var z = newArr[i].indexOf(vowels[j])
                    newArr[i] = startWithConst(newArr[i],z)
                }
                //call the const function
                // return "conditional 4"
            }
        }


    return tempArr.join(" ")
}


function asVowels (str) {
    str = str+ "way"
    return str
}

function startsWithY (string) {
        let test = string.slice(0,1)
        let b = string.slice(1)
        string = b+test+"ay"
    return string
}

function startsWithQU (str) {
    var x = str.slice(0,str.indexOf("u")+1)
    var y = str.slice(str.indexOf("u")+1)
    return y + x + "ay"
}

function  startWithConst (string,indexNum){

    var x = string.slice(0,indexNum-1)
    var y = string.slice(indexNum-1)
    return y+x+"ay"

}
// function startWithConst (string) {
//     var newArr = string.split(" ")
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (newArr[i].charAt(0) !== vowels[j]) {
//                 var x = newArr[i].slice(0,newArr.indexOf(vowels[j] )-1)
//                 var y = newArr[i].slice(newArr.indexOf(vowels[j]) -1)
//             }
//         }
//     }
//     return y + x + "ay"
// }

console.log(translator("yellow"));
