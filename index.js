const express = require('express')
const app = express()

const PORT = 3000
const hostname = 'localhost'

// config express
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-type, Accept' )
    next()
})

// -------------------------------------------------------------------------------
let dados = {
    celualar: "android", 
    cor:"preta"
}

app.get('/home', (req, res)=>{
    res.status(200).sendFile(__dirname+'/index.html')
})

app.get('/dados', (req, res)=>{
    res.status(200).send(dados)
})

app.get('/teste', (req, res)=>{
    res.status(200).end("teste de servidor")
})

app.get('/', (req, res)=>{
    res.status(200).send("teste")
})

// server --------------------------------------------------------------------------
app.listen(PORT, hostname,()=>{
    console.log(`servidor rodando em ${hostname}:${PORT}`)
})