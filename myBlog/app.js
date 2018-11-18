const express=require('express')
const fs=require('fs')
const path=require('path')
const router=require('./router.js')

const app=express()

app.engine('html',require('express-art-template'))

// app.set('view engine','html')

// app.set('views','./art_page')

// app.set('view engine','ejs')

// app.set('views','./ejs_pages')

app.use('/public/',express.static('./public/'))

app.use(router)

.listen('5000',()=>{
    console.log('server is runing at http://127.0.0.1:5000')
})
