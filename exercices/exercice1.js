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

function sortFunc1() {
    const values = Array.from(arguments).map(e => e * 2);
    values.sort((a, b) => a - b);

    return values;
}
  const result = sortFunc1(2,7,1,8,13,18);
  console.log(result);

// calcul(10, 5, 40, 25, 100, 1, 30)
