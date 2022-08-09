// 7. Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// function solution(seq) {
//     let sum = 0
//     for(let i = 0; i < seq.length; i++){
//         if(seq[i] <= seq[i-1]) {
//             sum++
//             if(sum > 1) {
//                 return false
//             }
//             // seq[i] = 1,3,2 <= seq[i-2] = 1 && seq[i+1] = 3,2 <= seq[i-1] = 1,3 --- false
//             if(seq[i] <= seq [i-2] && seq[i+1] <= seq[i-1]){
//                 return false
//             } 
//         }
//     }
//     return true
// }

// let result = solution([1, 3, 2, 1]);
// console.log(result)



