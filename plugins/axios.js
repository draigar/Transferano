export default function ({ app, $axios, $cookies, redirect, store, $auth }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'application/json, text/plain, */*'
        },
        timeout: 6000,
        Authorization: {
          Bearer: ''
        }
      }
    });
  
    $axios.onRequest(config => {
      // console.log('Making request to ' + userToken)
      $axios.setHeader('Authorization', `Bearer `)
    });
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status);
      // alert(code)
      console.log(code);
      if (code === 403 && process.browser) {
        // console.log(error.response);
        
      } else if (code === 403 && !process.browser) {
        // redirect the user to the login page from here and kill cookie or any other 
        // auth store agent
      }
    });
  
    // Set baseURL to something different
    // api.setBaseURL()
  
    $axios.setBaseURL(process.env.BASE_URL);
    // Inject to context as $api
    inject('api', api)
  }
  