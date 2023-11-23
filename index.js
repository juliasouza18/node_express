
const express= require("express")
const path = require("path")

const app = express()

const caminhoBase= path.join(__dirname, "templates") 

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


  
app.post('/cadastrar/salvar', (requisicao, resposta) => {
    const nome= requisicao.body.nomeCompleto
    const email= requisicao.body.emailTodo
    const senha= requisicao.body.senhaTop

    console.log(`O email do usuário é: ${email}`)
})
app.get('/cadastrar', (requisiçao, resposta)=> {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})
// htps://localhost:3000/usuarios/20
app.get('/usuarios/:id', (requisicao, resposta) => {
    const id= requisicao.params.id

    console.log(`acessando dados do usuário ${id}`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

// htps://localhost:3000
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!")
})