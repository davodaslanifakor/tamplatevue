var Cookietoken = null;

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
if (readCookie('token')) {
	Cookietoken = readCookie('token')
}

window.axios = require('axios');

// window.axios.defaults.headers.common['x-access-token'] = Cookietoken;
// window.axios.defaults.headers.common['x-access-token'] = Cookietoken;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.timeout = 10000
// window.axios.defaults.baseURL = 'https://api.unsplash.com'
// window.axios.defaults.baseURL = 'http://192.168.88.41:8585/api/v1/'

// window.axios.defaults.baseURL = 'http://iranhis.com/api/v1/'
// window.axios.defaults.baseURL = 'http://192.168.0.115:8080/api/v1/'
// window.axios.defaults.baseURL = 'http://localhost:8080/api/v1/'

export default {
	apiUrl: 'xxx-xxx-xxx',
	primaryColor: '#eb3a64',
	locale: 'fa',
	productionTip: true
  }
  
