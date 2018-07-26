import 'whatwg-fetch';
import cookie from 'react-cookies';

const Helper = (url,method,body)=>{
  const Url = "http://192.168.1.11:3000/v1/"+url;
  return(
    fetch(Url,{
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response =>{
      return response.json();
    })
    
    .catch(err=>{
      
      if(err.status===undefined){
        alert("something went wrong while processing your request. please try after sometime");
        cookie.remove("access_token");
        window.location.href="/";
      }
      return "Error while login " + err;
    })
  );
};

export default Helper;
