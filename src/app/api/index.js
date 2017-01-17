import * as axios from 'axios';

const CONFIG = {
  baseURL: 'http://localhost:8080/api',
};

const createHTTP = () => axios.create(CONFIG);
const http = createHTTP();

const GET = url => http.get(url);
const POST = (url, data={}) => http.post(url, data);
const DELETE = url => http.delete(url);



export const getNotes = ()=> GET(`/notes`).then(res => res.data);
export const addNote = data => POST(`/notes`, data);
export const deleteNote = id => DELETE(`/notes/${id}`);

export const addUser = data => POST('/users', data);
export const loginUser = data => POST('/users/authenticate', data).then(res => res.data);





