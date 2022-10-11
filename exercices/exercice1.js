// 10
// 5
// 40
// 25
// 100
// 1

function sortFunc() {
    const tableau = [];
    for(let i of arguments) {
        tableau.push(i * 2);
    }

    tableau.sort((a, b) => a - b);

    return tableau;
}
  const result = sortFunc(2,7,1,8,13,18);
  console.log(result);

// function calcul(list) {

// }


// calcul(10, 5, 40, 25, 100, 1, 30)
