import { createContext } from "react";

/*
This is like declaring a global variable, which can be edited/accessed
anywhere where it's needed, without the need of passing it through
the components 
*/

const UserContext = createContext([
  {
    firstName: "Bob",
    lastName: "Bobberson",
    suffix: 1,
    email: "bobbobberson@example.com",
  },
  (obj) => obj,
]);

export default UserContext;
