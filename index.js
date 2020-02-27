module.exports = {
  email: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/),
  phone: new RegExp(/^1[3456789]\d{9}$/),
  username: new RegExp(/^[^0-9][a-zA-Z0-9_]{5,11}$/),
  idCard:new RegExp(/^[1-9]\d{5}(18|19|([2][012]))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/),
  url: new RegExp(/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),
  ip4: new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
  color: new RegExp(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/),
  licensePlate: new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/),
  chinese: new RegExp(/[\u4E00-\u9FA5]/),
  // 密码长度6-12，由数字，小写字母，大写字母组成，但必须至少包括2种字符。
  passwordStrength: new RegExp(/(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/),
  
  // 匹配数字千分位 然后替换
  thousands: new RegExp(/\B(?=(\d{3})+\b)/g),
}