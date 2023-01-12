const users =
    [
        { username: 'BOb', last_name: 'Roger', active: false, number: 7 },
        { username: 'Robert', last_name: 'Maurice', active: true, number: 6 },
        { username: 'Andre', last_name: 'Sam', active: false, number: 1 },
        { username: 'David', last_name: 'Vero', active: true, number: 10 },
        { username: 'Leon', last_name: 'Sacha', active: true, number: 22 },
    ];

//filter

console.log(
    users.filter(function(u) {
        return u.number > 7;
    })
)


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