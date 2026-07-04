import express from 'express'
import {engine} from 'express-handlebars'
import session from 'express-session'
import { trusted } from 'mongoose'


const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.get("/", (req,res)=>{
    res.render('index', {
        title : "Homepage",
        username : 'Bryant'
    })
})

app.get("/about", (req,res)=>{
    res.render('about', {
        title : "About",
        message : "Welcome to my about page and read all of my bios!"
    })
})

app.get("/author", (req,res)=>{
    res.render('author', {
        title : "Author",
        message : "This is my hobby!!!!"
    })
})

const port = 3006
app.listen(port, ()=>{
    console.log(`Server running on localhost:${port}`)
})