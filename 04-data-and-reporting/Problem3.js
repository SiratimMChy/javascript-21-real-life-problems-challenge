function formatUsers(users) {
  let updateFormat = [];
  for (const user of users) {
    updateFormat.push({
      FullName: user.firstName.concat(' ', user.lastName),
      Age: user.age
    })
  }
  return updateFormat;
}
const users = [
  {
    firstName: "Rahim",
    lastName: "Ahmed",
    age: 25
  },
  {
    firstName: "Karim",
    lastName: "Hasan",
    age: 30
  },
  {
    firstName: "Nabil",
    lastName: "Islam",
    age: 22
  }
];
console.log(formatUsers(users));
