import bcrypt from "bcryptjs";
const Users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "Lara Jean Song Covey",
    email: "larajeansongcovey@gmail.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "Peter Kavinsky",
    email: "peterkavinsky@hotmail.com",
    password: bcrypt.hashSync("123456", 10)
  }
];
export default Users;
