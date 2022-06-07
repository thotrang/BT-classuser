import { User } from "./user";
import { Role } from "./user";
let men1=new User('tuân','abc@gmail.com',Role.admin);
let men2=new User("linh","vvdr@gmail.com",Role.user);

men1.getInfo();
men2.getInfo();

console.log(men1.isAdmin());
