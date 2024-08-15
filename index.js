// Importa o módulo Express.
const express = require('express');

// Cria uma instância do aplicativo Express.
const app = express();

// Define a porta na qual o servidor irá escutar as requisições.
const port = 3000; 

// Importa dados do arquivo JSON.
const data = require("./data.json") 

// Middleware que permite ao Express interpretar JSON no corpo das requisições.
app.use(express.json()); 

// Rota para obter todos os clientes.
app.get("/clients", (req, res) => {

    // Retorna todos os dados no arquivo JSON como resposta.
    res.json(data); 
});

// Rota para obter um cliente específico pelo ID.
app.get("/clients/:id", (req, res) => {

    // Obtém o ID do parâmetro da URL.
    const { id } = req.params;

    // Encontra o cliente com o ID correspondente.
    const client = data.find(cli => cli.id == id); 

    if (!client) {

        // Se o cliente não for encontrado, retorna um status 204 (sem conteúdo).
        return res.status(204).json();
    }

    // Retorna o cliente encontrado como resposta.
    res.json(client); 
});

// Rota para criar um novo cliente.
app.post("/clients", (req, res) => {

    // Obtém o nome e o e-mail do corpo da requisição.
    const { name, email } = req.body; 

    // Retorna o nome e o e-mail recebidos como resposta.
    res.json({ name, email }); 
});

// Rota para atualizar um cliente existente pelo ID.
app.put("/clients/:id", (req, res) => {

    // Obtém o ID do parâmetro da URL.
    const { id } = req.params;

    // Encontra o cliente com o ID correspondente.
    const client = data.find(cli => cli.id == id); 
    
    if (!client) {

        // Se o cliente não for encontrado, retorna um status 204 (sem conteúdo).
        return res.status(204).json();
    }
    // Obtém o nome do corpo da requisição.
    const { name } = req.body;

    // Atualiza o nome do cliente encontrado.
    client.name = name;

    // Retorna o cliente atualizado como resposta.
    res.json(client); 
});

// Rota para deletar um cliente específico pelo ID.
app.delete("/clients/:id", (req, res) => {

    // Obtém o ID do parâmetro da URL.
    const { id } = req.params;

    // Filtra os clientes para remover o cliente com o ID correspondente.
    const clientsFiltered = data.filter(client => client.id != id); 

    // Retorna a lista de clientes filtrada como resposta.
    res.json(clientsFiltered); 
});

 // Inicia o servidor e faz com que ele escute na porta definida.
app.listen(port, () => {
    // Mensagem exibida no console indicando que o servidor está em execução.
    console.log('Server is Running'); 
});
