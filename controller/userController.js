import { User } from '../models/user.js';
export const insert = (req, res)=>{
   const Data=User.build({name: 'John Doe'});
   console.log(Data);
};

