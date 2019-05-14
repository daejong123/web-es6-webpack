
import Display from './Display'

const display = new Display()

const username = "hello wonerbits"

console.log("导入wb库成功")

// 全局挂载到浏览器window对象上， 外层也包装一层wb。方便管理，类似命名空间
window.wb = {
    sayHi: display.sayHello,
    username: username
}