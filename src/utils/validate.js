export function nameRule(rule, value, callback) {
  // 请输入4-10位的昵称
  let reg = /(^[A-Za-z0-9]{4,10}$)/
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else if (!reg.test(value)) {
    callback(new Error('请输入4-10位用户名'))
  } else {
    callback()
  }
}
export function passRule(rule, value, callback) {
  let pass =
    /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!pass.test(value)) {
    callback(new Error('请输入6-12位密码包含大小写和数字和特殊符号'))
  } else {
    callback()
  }
}
