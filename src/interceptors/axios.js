import axios from "axios";  

axios.defaults.baseURL = process.env.WEPGROUP_BACKEND_API_URL;  
axios.defaults.withCredentials  = true;  

let refresh = false
axios.interceptors.response.use(  
  resp => resp,  
  async error => {  
    if (error.response && error.response.status === 401 && !refresh) {
      refresh = true
      const { status, data } = await axios.post('/api/refresh');  

      if (status === 200) {  
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;  

        return axios(error.config);  
      }  
    }
    refresh = false
    return Promise.reject(error); // Ensure to reject the error if not handled  
  }  
);

