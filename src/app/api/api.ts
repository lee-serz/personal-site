import axios from "axios";

export const submitForm = (data: any) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/form/submit`, data);
};
