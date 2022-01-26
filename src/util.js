export default {
  isNotSpecialCharacter (val) {
    const reg = /[\{\}\[\]\/\?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi

    if(reg.exec(val) !== null) {
      return val.slice(0, -1)
    } else {
      return val
    }    
  }
}
