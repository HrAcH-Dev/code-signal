// 8. After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

function solution(matrix) {
    let sum = 0
    for(let i = 0; i < matrix[0].length; i++) {
        for(let j = 0; j < matrix.length; j++) {
                if(matrix[j][i] === 0) {
                    break
                }
                sum += matrix[j][i]
        }
    }
    return sum

}

let result = solution(
    [
        [0, 1, 0, 2], 
        [0, 5, 0, 0], 
        [2, 0, 3, 3]
    ]
)

console.log(result)
