import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

export async function sendDataToDatabase(obj: any) {
  console.log(import.meta.env.VITE_URL_POST);
  api.post(import.meta.env.VITE_URL_POST, obj).catch((err) => {
	  alert("Houve um erro ao realizar a inscrição, tente novamente mais tarde");
  })
}
