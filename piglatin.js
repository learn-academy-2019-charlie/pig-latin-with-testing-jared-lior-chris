var userInput = document.getElementById("user-input").value



var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "y"]

const hasNums = (string) => {
    var matches = document.getElementById("user-input").value.match(/\d+/g)
    if (matches != null) {
        return true
    }
    else {
        return false
    }
}

const playSound = () => {
    var audio = new Audio("Pigpissd.wav")
    audio.oncanplaythrough = function () {}
    audio.onended = function () {}
    audio.play()
}
function pigLatin (sentence){

  // convert the string recived to an array with all lower case letters
  if (hasNums(sentence)) {
      playSound()
      alert("Please enter only strings")
      return "enter only strings!"
  }
  
  var newArr = sentence.toLowerCase().split(" ")
  var indexNum = -1 // index num outside of the array length

  for (let i = 0; i < newArr.length; i++) {
    // if the word in the [i] index starts with a vowel
    if (vowels.includes(newArr[i].charAt(0)) && newArr[i].charAt(0) !== "y") {
        newArr[i] = newArr[i]+"way" // add "way" to the end of the word
        // check if the word start with a y
    } else if (newArr[i].charAt(0) === "y") {
        let a = newArr[i].slice(0,1) // first letter
        let b = newArr[i].slice(1) // from the second letter to the end of the string
        newArr[i] = b+a+"ay"
        // It does not start with a vowel or a y
    } else {
        // if the word contains a u if it does check if next to the u there is a q
        if (newArr[i].includes("u") && newArr[i].charAt(newArr[i].indexOf("u")-1) ==="q") {
          // first letter and up to the u inclusive
          let b = newArr[i].slice(newArr[i].indexOf("u")+1) // from the u to the end of the word
          let a = newArr[i].slice(0,newArr[i].indexOf("u")+1)
          newArr[i] = b+a+"ay"
        }
        // if it does not contain the QU sequence
        else {
          // find the index number of the first vowel in the word
          for (let char of newArr[i]){ // for each loop to iterate inside the word in [i] position
            if (vowels.includes(char)) {
              indexNum = newArr[i].indexOf(char)
              // stop the loop because we have found the first vowel
              break;
            }
          }
          let a = newArr[i].slice(0,indexNum) // first letter until first vowel not including the vowel
          let b = newArr[i].slice(indexNum) // from the vowel until the end of the word
          newArr[i] = b+a+"ay"
        }
      }
  }
  return newArr.map((x) => {
      return  x.charAt(0).toUpperCase() + x.slice(1)
  }).join(" ")
}
