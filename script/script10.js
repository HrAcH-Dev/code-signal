// 10. Given two strings, find the number of common characters between them.
// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be

// function solution(s1,s2) {
//     let sum = 0;
//     s1 = s1.split("");
//     s2 = s2.split("");

//     s1.forEach(elem => {
//         if(s2.includes(elem)) {
//             sum++;
//             s2.splice(s2.indexOf(elem), 1)
//         }
//     });
//     return sum
// }

// let result = solution("aabcc","adcaa")
// console.log(result)