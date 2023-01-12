const users =
    [
        { username: 'BOb', last_name: 'Roger', active: true, number: 7 },
        { username: 'Robert', last_name: 'Maurice', active: true, number: 6 },
        { username: 'Andre', last_name: 'Sam', active: true, number: 1 },
        { username: 'David', last_name: 'Vero', active: true, number: 10 },
        { username: 'Leon', last_name: 'Sacha', active: true, number: 22 },
    ];


    console.log(
        users.filter(u => u.number === 1 || u.number === 7).map(u => u.last_name)
    )



    

//filter

// retourner tous les utilisateurs qui ont un number soit de 1 ou sot de 7
// retrourner que le lastname

//console.log(users.every((u) => u.active));

// console.log(
//     users.some(function(u) {
//         return u.active ;
//     })
// )
// console.log(users.find((nom) => nom.username === "Leon"));



// console.log(users.filter(function (u) { return u.active }))
// console.log(users.filter((u) => u.active));

// console.log(
//     users.filter(function(u) {
//         return u.number > 7;
//     })
// )


    // console.log(users.map(function (user) {
//     return { 
//         username: user.username,
//         last_name: user.last_name,
//     };
// }))



// console.log(users.map(function (user) {
//     delete user.active;
//     delete user.number;
//     return user;
// }))


    //console.log(users.map((u) => u.username + " " + u.last_name));
// users.forEach((u) => console.log(u.username))

// console.log(users.map(u => u.username.toLocaleUpperCase()));



// const username = [];
// users.forEach((element) => {
//     username.push(element.username);
// }); console.log(username);