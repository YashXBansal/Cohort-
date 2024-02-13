interface User{
    name: string,
    lastname: string,
    age: number,
}
function filteredUsers(users: User[]){
    return users.filter(x => x.age >=18);
}
console.log(filteredUsers([{
    name: "Yash",
    lastname: "Bansal",
    age: 18
}, {
    name: "Sniper",
    lastname: "Bansal",
    age: 16 
}]))