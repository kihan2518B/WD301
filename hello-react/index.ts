// interface User {
//     name: string;
//     id: number;
//     isAdmin: boolean;
// }

// let newUser = {
//     name: "kishan",
//     id: 2,
//     isAdmin: true,
// }

// function addUser(user: User): string {
//     return user.name + " added successfully";
// }
// addUser(newUser)
let user: [string, string] = ["johnDoe", "mySecretPassword"];
let [email, password] = user;
console.log(user)