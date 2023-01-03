// document.addEventListener("mousemove" , function(e){
//     var x = document.getElementById("test")

//     x.style.left = e.clientX.toString() +"px"
//     x.style.top = e.clientY.toString() +"px"
// })

// var id = document.getElementById("id")
// var pass = document.getElementById("password")

// let btn = document.getElementById("btn")

// function Bclick() {
//     if (id.value.length < 8 && !id.value.includes(0,1,2,3)) {
//         console.log("id should be more than 8 letters and includes numbers");
//     }
// }

// let userName = document.querySelector(`[name = "username"]`)
// let age = document.querySelector(`[name = "age"]`)
// let ourForm = document.querySelector("form")

// ourForm.onsubmit = (e) => {
//     let userValid = false
//     let ageValid = false

//     if (userName.value.length < 10 && userName.value != "") {
//         userValid = true
//     }
//     if (age.value != "" && parseInt(age.value) > 0 && parseInt(age.value) != NaN) {
//         ageValid = true
//     }
//     if (userValid == false || ageValid == false) {
//        e.preventDefault() 
//     }
//     console.log(e.target.firstElementChild.value);
// }

// let mylist = ["Home" , "About" , "Contact"]

// let myNav = document.createElement("div")
// let logo = document.createElement("h3")
// logo.innerHTML = "Shady"
// logo.style.paddingLeft = "30px"
// myNav.append(logo)
// let list = document.createElement("ul")
// let li = document.createElement("li")

// for (let i = 0; i < mylist.length; i++) {
//     let newLi = li.cloneNode(true)
//     newLi.innerHTML = mylist[i]
//     list.append(newLi)
//     myNav.append(list)
// }
// document.body.append(myNav)

// myNav.style.display = "flex"
// myNav.style.alignItems = "center"
// myNav.style.justifyContent = "space-between"
// myNav.style.margin = "0 0"
// myNav.style.backgroundColor = "#ECECEC"
// list.style.listStyleType = "none"
// list.style.display = "flex"
// list.style.width = "500px"
// list.style.justifyContent = "space-evenly"
// document.body.style.margin = "0"

// let container = document.createElement("div")
// container.classList = "container"
// container.style.display = "grid"
// container.style.gridTemplateColumns = "repeat(auto-fill,minmax(400px, 1fr))"
// container.style.gap = "40px"
// container.style.marginTop = "20px"

// let card = document.createElement("div")
// card.classList = "card"
// card.style.height = "300px"
// card.style.backgroundColor = "tomato"
// card.style.display = "flex"
// card.style.justifyContent = "center"
// card.style.alignItems = "center"

// for (let i = 1; i < 16; i++) {
//     let title = document.createElement("h3")
//     title.innerHTML = i
//     let desc = document.createElement("p")
//     desc.innerHTML = "Test"
//     let dataC = document.createElement("div")
//     dataC.append(title)
//     dataC.append(desc)
//     dataC.style.textAlign = "center"
//     let newCard = card.cloneNode(true)
//     newCard.appendChild(dataC)
//     container.append(newCard)
//     newCard.addEventListener("click" , () => {
//         console.log(i);
//     })
// }

// document.body.appendChild(container)



// ......................................................................................................................

document.forms[0].onsubmit = (e) =>{
    e.preventDefault()
}

let myInput = document.querySelector("input")
let myBtn = document.getElementById("btn")
let mainDiv = document.getElementById("mainDiv")
let secDiv = document.createElement("div")
secDiv.classList = "innerDiv"
let inputValueP = document.createElement("p")
let delBtn = document.createElement("button")
delBtn.innerHTML = "Delete"
let allTasks = []


myBtn.addEventListener("click" , () => {
    if (myInput.value != "") {
        let newValue = inputValueP.cloneNode(true)
        let newDel = delBtn.cloneNode(true)
        let newSec = secDiv.cloneNode(true)
        newValue.innerHTML = myInput.value
        newSec.append(newValue)
        newSec.append(newDel)
        mainDiv.append(newSec)
        let task = {
            id: new Date().getTime(),
            text: newValue.innerHTML
        }
        allTasks.push(task)
        console.log(allTasks);
        localStorage.setItem("tasks" , JSON.stringify(allTasks))
        newDel.addEventListener("click" , remove)
        myInput.value = ""
    }else {
        window.alert("Empty")
    }
})
    
function display() {
    allTasks = JSON.parse(localStorage.getItem("tasks")) || []
    for (let i = 0; i < allTasks.length; i++) {
        let newValue = inputValueP.cloneNode(true)
        let newDel = delBtn.cloneNode(true)
        let newSec = secDiv.cloneNode(true)
        newValue.innerHTML = allTasks[i].text
        newSec.append(newValue)
        newSec.append(newDel)
        mainDiv.append(newSec)
        newDel.addEventListener("click" , remove)

    }

    console.log(allTasks);

}

display()

function remove(e) {
    allTasks = JSON.parse(localStorage.getItem("tasks")) || []
    e.currentTarget.parentElement.remove()
    let newTasks = allTasks.filter((elem) => {
        return elem.text != e.currentTarget.parentElement.querySelector("p").innerHTML
    })
    console.log(newTasks);
    localStorage.setItem("tasks" , JSON.stringify(newTasks))
}
// ......................................................................................................................



// Running Sum Of 1d Array

// let nums = [1,2,3,4]; 

// let counter = 0;

// let runSum = function (nums) {
//     let newNums = nums.map((e) => {
//         return counter = counter + e
//     })
//     return newNums
// }

// console.log(runSum(nums));


// // Find Pivot 

// let pNums = [1,2,3];

// let pivotIndex = function(nums) {
//     if(nums.length === 0) return -1
//     if(nums.length === 1) return 0

//     const totalSum = pNums.reduce((acc,curr) => {
//         return acc + curr
//     })
//     let leftSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (leftSum === totalSum - leftSum - nums[i]) {
//             return i
//         }
//         leftSum += nums[i]
//     }
//     return -1
// }

// console.log(pivotIndex(pNums));

// let t1 = "acb"

// let test = "ahbgdc"

// var isSubsequence = function(s, t) {

//     if(s.length > t.length) {
//         return false
//     } else if (s == t) {
//         return true
//     }
//     let newLetter = ""
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < t.length; j++) {
//             if (s[i] == t[j]) {
//                 newLetter += s[i]
//                 i++
//             }
//         }        
//     }
//     return newLetter == s ? true : false
    
// };
// console.log(isSubsequence(t1,test));



// var isIsomorphic = function(s, t) {
//     // Base case: for different length of two strings...
//     if(s.length != t.length)
//         return false;
//     // Create two maps for s & t strings...
//     const map1 = [256];
//     const map2 = [256];
//     // Traverse all elements through the loop...
//     for(let idx = 0; idx < s.length; idx++){
//         // Compare the maps, if not equal, return false...
//         if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
//             return false;
//         // Insert each character if string s and t into seperate map...
//         map1[s.charAt(idx)] = idx + 1;
//         map2[t.charAt(idx)] = idx + 1;
//     }
//     return true;    // Otherwise return true...
// };



// let arr = [".",".",".",".","8",".",".","7","9"]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == '.') {
//         if (!arr[i].includes((i+1).toString())) {
//             arr[i] = (i+1).toString()
//         }
//     }else{
//         continue;
//     }
// }


// console.log(arr);

// let numss = [2,3,4]

// var twoSum = function(nums, target) {
//     let indexs = []
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             sum = nums[i] + nums[j]
//             if (sum == target) {
//                 indexs.push(i)
//                 indexs.push(j)
//             }
//         }
//     }
//     return indexs.length != 0 ? indexs : -1
// };


// console.log(twoSum(numss,6));



// let x = 121


// var isPalindrome = function(x) {
//     let newX = x.toString().split("")
//     for (let i = 0; i < newX.length; i++) {
//         if (newX[i] === newX[newX.length - (i+1)]) {
//             continue;
//         }else{
//             return false
//         }
//     }
//     return true
// };

// console.log(isPalindrome(x));



// var romanToInt = function(s) {
//     let sum = 0;
//     let roman = {
//         I:1,
//         V:5,
//         X:10,
//         L:50,
//         C:100,
//         D:500,
//         M:1000
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (roman[s[i]] < roman[s[i+1]]) {
//             sum-= roman[s[i]]
//         }else{
//             sum += roman[s[i]]
//         }
//     }
//     return sum;
// };

// console.log(romanToInt("MCMXCIV"));


// let strs = ["flower","flow","flight"]

// // var longestCommonPrefix = function(strs) {
// //     let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
// //     for (let str of strs) {
// //         while (str.slice(0, prefix.length) != prefix) {
// //             prefix = prefix.slice(0, -1);
// //         }
// //     }
// //     return prefix;
// // };


// var longestCommonPrefix = function(strs) {
//   // check border cases size 1 array and empty first word)
//   if (!strs[0] || strs.length ==  1) return strs[0] || "";
//   let i = 0;

//   // while all words have the same character at position i, increment i
//   while(strs[0][i] && strs.every(w => w[i] === strs[0][i]))
//     i++;
  
//   // prefix is the substring from the beginning to the last successfully checked i
//   return strs[0].substr(0, i);
// }

// // let res = longestCommonPrefix(["flower","flow","flight"]);

// console.log(longestCommonPrefix(strs));



// var isValid = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == s[i+1]) {
//             return true
//         }
//         return false
//     }
// };

// console.log(isValid("()"));


// let nwNum = [3,2,2,3], val = 3



// // nwNum.splice(0,1)

// // console.log(nwNum);


// // var removeElement = function(nums, val) {
// //     const oldL = nums.length;
// //     for (let i = 0; i < nums.length; i++) {
// //         if (nums[i] == val) {
// //             nums.splice(i,1)
// //             i--
// //         }
// //     }
// //     let c = nums.length
// //     return  c
// // };


// var removeElement = function(nums, val) {
//     let start = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[start] = nums[i];
//             start++
//         }
//     }
//     return start
// };


// console.log(nwNum);
// console.log(removeElement(nwNum,val));