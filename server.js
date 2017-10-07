const express = require('express')
//<!-- const = constant ประกาศตัวแปร-->

const { twig } = require('twig')

const app = express()
//<!-- เรียกฟังก์ชั่นที่ชชื่อว่า app -->

app.set('view engine', 'twig')

const homecontroller = require('./controllers/home.controller')
const newscontroller = require('./controllers/news.controller')

app.get('/', homecontroller.index)
app.get('/news', newscontroller.index)

app.use('/assets', express.static(__dirname + '/static/assets', {
  maxage: 86400000
}))

app.get('/', function(req, res){
  res.send('Hello')
})

app.get('/home', function(req, res){
  res.send('Home')
})
//<!--สั่งให้ app สั่งงานฟังก์ชัน get แล้วส่งคำว่า hello ออกไป-->
//<!-- res.seend = ตัวแสดงข้อมูล -->


app.listen(8000, function(err) {
  console.log('Server is running on port 8000')
})
//<!-- app.listen ที่ port 8000 ให้มันแสดงค่าออกมาบนตัวที่รัน-->
