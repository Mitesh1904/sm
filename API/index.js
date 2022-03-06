import axios from 'axios';
import { WebLink} from '../const/List';


const API = axios.create({ baseURL: WebLink });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem(User)) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(User)).token}`;
//   }
//   req.headers.adminkey=process.env.password;

//   return req;
// });


//user
// export const GetUser = (name) => axios.post('/api/user/finduser',{email:name});


