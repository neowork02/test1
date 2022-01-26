export default {
  getToken () {
    return localStorage.token;
  },
  
  logout (callback) {
    delete localStorage.token;
    if (callback) callback()
  }
}
