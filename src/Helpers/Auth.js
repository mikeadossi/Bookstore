class Auth {
  static isLoggedIn(){
    const username = window.localStorage.getItem('username');
    const token = window.localStorage.getItem('token');
    return (username != undefined && token != undefined);
  }
  static logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('token');
  }
}

export default Auth;
